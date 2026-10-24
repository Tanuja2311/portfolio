"use client";

import { useEffect, useRef, useState } from "react";

interface EmbedFrameProps {
  src:    string;
  title:  string;
  height: number; // starting height in px, used until the prototype reports its own
}

// A playable prototype from /public, shown in embed mode. The prototype reports its content
// height (postMessage "sq-embed-height"), and the frame grows or shrinks to fit it.
export function EmbedFrame({ src, title, height }: EmbedFrameProps) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [h, setH] = useState(height);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== window.location.origin) return;
      if (e.source !== ref.current?.contentWindow) return;
      const data = e.data as { type?: string; h?: number } | null;
      if (data?.type === "sq-embed-height" && typeof data.h === "number") {
        setH(Math.max(200, Math.ceil(data.h)));
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const sep = src.includes("?") ? "&" : "?";
  return (
    <iframe
      ref={ref}
      src={`${src}${sep}embed=1`}
      title={title}
      loading="lazy"
      className="sq-embed-frame"
      style={{ height: h }}
    />
  );
}
