import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import { productVideos } from "../data/productVideos";

export function VideoDialog() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const video = productVideos["poolbiking-one-2-0"];
  const videoId = new URL(video.url).searchParams.get("v");
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  const close = () => {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  };
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="pb-watch-button"
        onClick={() => setOpen(true)}
      >
        <span>
          <Play size={16} fill="currentColor" />
        </span>
        See it in motion
      </button>
      {open && (
        <dialog
          ref={dialog}
          className="pb-video-dialog"
          aria-labelledby="video-title"
          onCancel={(event) => {
            event.preventDefault();
            close();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="pb-video-dialog-head">
            <div>
              <span className="pb-eyebrow">Inside the experience</span>
              <h2 id="video-title">This is Poolbiking.</h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close video"
              autoFocus
            >
              <X size={23} />
            </button>
          </div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="This is Poolbiking — manufacturer video"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p>
            Video by POOLBIKING.{" "}
            <a href={video.url} target="_blank" rel="noreferrer">
              Watch on YouTube <ExternalLink size={14} />
            </a>
          </p>
        </dialog>
      )}
    </>
  );
}
