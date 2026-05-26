"use client";

import { createElement } from "react";
import Script from "next/script";

const SPLINE_VIEWER_SRC =
  "https://unpkg.com/@splinetool/viewer@1.12.95/build/spline-viewer.js";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/Bhud0547qhTHVaUe/scene.splinecode";

export function SplineBot() {
  return (
    <div className="sonivo-bot-float relative h-full w-full">
      <Script src={SPLINE_VIEWER_SRC} type="module" strategy="afterInteractive" />
      {createElement("spline-viewer", {
        "aria-label": "Interaktiver Sonivo Bot",
        className: "sonivo-spline-viewer",
        url: SPLINE_SCENE_URL,
      })}
    </div>
  );
}
