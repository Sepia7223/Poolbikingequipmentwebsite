import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import heroImage from "../content/optimized/pool-session.webp";
import heroMobile from "../content/optimized/pool-session-mobile.webp";
import { productVideos } from "../data/productVideos";

type Player = {
  mute(): void;
  playVideo(): void;
  pauseVideo(): void;
  destroy(): void;
};
type YouTubeAPI = {
  Player: new (
    element: HTMLElement,
    options: {
      host: string;
      videoId: string;
      playerVars: Record<string, string | number>;
      events: {
        onReady(event: { target: Player }): void;
        onStateChange(event: { data: number }): void;
        onError(): void;
      };
    },
  ) => Player;
};
declare global {
  interface Window {
    YT?: YouTubeAPI;
    onYouTubeIframeAPIReady?: () => void;
  }
}
let apiPromise: Promise<YouTubeAPI> | undefined;
function loadPlayer() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise)
    apiPromise = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        if (window.YT) resolve(window.YT);
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => {
        apiPromise = undefined;
        script.remove();
        reject(new Error("Video unavailable"));
      };
      document.head.appendChild(script);
    });
  return apiPromise;
}

/** Manufacturer footage with a photo fallback; never autoplay for reduced-motion/data-saving visitors. */
export function HeroVideo() {
  const container = useRef<HTMLDivElement>(null);
  const player = useRef<Player>();
  const [allowed, setAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () =>
      setAllowed(!preference.matches && !connection?.saveData);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!allowed || !container.current) {
      setPlaying(false);
      return;
    }
    let disposed = false;
    const parent = container.current;
    const mount = document.createElement("div");
    parent.appendChild(mount);
    const id = new URL(
      productVideos["poolbiking-one-2-0"].url,
    ).searchParams.get("v")!;
    loadPlayer()
      .then((YT) => {
        if (disposed) return;
        player.current = new YT.Player(mount, {
          host: "https://www.youtube-nocookie.com",
          videoId: id,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            playsinline: 1,
            loop: 1,
            playlist: id,
            disablekb: 1,
            fs: 0,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: ({ target }) => {
              if (disposed) return;
              const iframe = parent.querySelector("iframe");
              if (iframe) {
                iframe.tabIndex = -1;
                iframe.title = "POOLBIKING background film";
              }
              target.mute();
              if (!pausedRef.current) target.playVideo();
            },
            onStateChange: ({ data }) => {
              if (!disposed) setPlaying(data === 1 || data === 2);
            },
            onError: () => {
              if (!disposed) setPlaying(false);
            },
          },
        });
      })
      .catch(() => {
        if (!disposed) setPlaying(false);
      });
    return () => {
      disposed = true;
      player.current?.destroy();
      player.current = undefined;
      parent.replaceChildren();
    };
  }, [allowed]);
  return (
    <>
      <div className="pb-hero-media" aria-hidden="true">
        <picture>
          <source media="(max-width: 760px)" srcSet={heroMobile} />
          <img
            src={heroImage}
            alt=""
            {...{ fetchpriority: "high" }}
            width="1920"
            height="948"
          />
        </picture>
        <div
          ref={container}
          className={`pb-hero-film ${playing ? "is-playing" : ""}`}
        />
      </div>
      {allowed && playing && (
        <button
          type="button"
          className="pb-film-toggle"
          aria-label={
            paused ? "Play background video" : "Pause background video"
          }
          onClick={() => {
            const next = !paused;
            pausedRef.current = next;
            setPaused(next);
            if (next) player.current?.pauseVideo();
            else player.current?.playVideo();
          }}
        >
          {paused ? <Play size={17} /> : <Pause size={17} />}
        </button>
      )}
    </>
  );
}
