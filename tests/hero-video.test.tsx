import { afterEach, expect, it, vi } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { HeroVideo, HERO_CLIP } from "../src/components/HeroVideo";

afterEach(() => {
  delete window.YT;
});

it("keeps a photo until playback starts and offers a working pause control", async () => {
  const mute = vi.fn(),
    playVideo = vi.fn(),
    pauseVideo = vi.fn(),
    destroy = vi.fn(),
    loadVideoById = vi.fn(),
    setOption = vi.fn();
  let events: ConstructorParameters<
    NonNullable<Window["YT"]>["Player"]
  >[1]["events"];
  window.YT = {
    Player: class {
      mute = mute;
      playVideo = playVideo;
      pauseVideo = pauseVideo;
      destroy = destroy;
      loadVideoById = loadVideoById;
      setOption = setOption;
      constructor(
        _node: HTMLElement,
        options: ConstructorParameters<NonNullable<Window["YT"]>["Player"]>[1],
      ) {
        events = options.events;
        expect(options.videoId).toBe("QXIk80bnOsA");
        expect(options.playerVars.start).toBe(14);
        expect(options.playerVars.end).toBe(50);
      }
    },
  };
  const view = render(<HeroVideo />);
  await waitFor(() => expect(events).toBeDefined());
  expect(view.container.querySelector(".pb-hero-film.is-playing")).toBeNull();
  act(() =>
    events.onReady({
      target: {
        mute,
        playVideo,
        pauseVideo,
        destroy,
        loadVideoById,
        setOption,
      },
    }),
  );
  expect(mute).toHaveBeenCalled();
  expect(playVideo).toHaveBeenCalled();
  act(() => events.onStateChange({ data: 1 }));
  expect(
    view.container.querySelector(".pb-hero-media.is-video-visible"),
  ).toBeTruthy();
  act(() => events.onStateChange({ data: 3 }));
  expect(
    view.container.querySelector(".pb-hero-media.is-video-visible"),
  ).toBeTruthy();
  fireEvent.click(
    screen.getByRole("button", { name: "Pause background video" }),
  );
  expect(pauseVideo).toHaveBeenCalled();
  fireEvent.click(
    screen.getByRole("button", { name: "Play background video" }),
  );
  expect(playVideo).toHaveBeenCalledTimes(2);
  act(() => events.onApiChange());
  expect(setOption).toHaveBeenCalledWith("captions", "track", {});
  act(() => events.onStateChange({ data: 0 }));
  expect(loadVideoById).toHaveBeenCalledWith(HERO_CLIP);
  act(() => events.onError());
  expect(
    view.container.querySelector(".pb-hero-media.is-video-visible"),
  ).toBeNull();
  expect(view.container.querySelector(".pb-hero-film.is-playing")).toBeNull();
  view.unmount();
  expect(destroy).toHaveBeenCalled();
});

it("does not load video when reduced motion is requested", () => {
  vi.mocked(window.matchMedia).mockReturnValue({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  } as unknown as MediaQueryList);
  const construct = vi.fn();
  window.YT = {
    Player: construct as unknown as NonNullable<Window["YT"]>["Player"],
  };
  const view = render(<HeroVideo />);
  expect(construct).not.toHaveBeenCalled();
  expect(view.container.querySelector("picture img")).toBeTruthy();
  expect(screen.queryByRole("button")).toBeNull();
});
