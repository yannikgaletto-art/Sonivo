"use client";

import { createElement } from "react";
import Script from "next/script";

// Viewer-Runtime 1.12.92, lokal gehostet → keine unpkg-CDN-Abhängigkeit.
// Upgrade-Pfad: neue Version von unpkg.com/@splinetool/viewer@X/build/spline-viewer.js
// herunterladen und diese Datei überschreiben.
const SPLINE_VIEWER_SRC = "/spline/spline-viewer.js";

// Lokal gehostete Szene → unabhängig von Spline-Abo und prod.spline.design.
// Drop-in-Replacement bei Spline-Re-Export: Datei einfach überschreiben.
const SPLINE_SCENE_URL = "/spline/sonivo-bot.splinecode";

export function SplineBot() {
  return (
    <div className="sonivo-bot-float relative h-full w-full">
      <Script
        crossOrigin="anonymous"
        src={SPLINE_VIEWER_SRC}
        type="module"
        strategy="afterInteractive"
      />
      {createElement("spline-viewer", {
        "aria-label": "Interaktiver Sonivo Bot",
        className: "sonivo-spline-viewer",
        loading: "eager",
        "loading-anim-type": "spinner-small-dark",
        url: SPLINE_SCENE_URL,
      })}
    </div>
  );
}
