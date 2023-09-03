"use client";
import React from "react";
import "./globals.css";
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>ATIV MUSIC</title>

        <meta property="og:title" content="ATIV Music" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ativ.studio" />
        <meta
          property="og:image"
          content="https://s3.ap-northeast-2.amazonaws.com/opengraph.ativ.studio/og_ativ.png"
        />
        <meta property="og:image:alt" content="ATIV logo" />
        <meta
          property="og:description"
          content="Savor the Artistry, Reap the Benefit."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ativ.studio" />
        <meta property="twitter:url" content="https://ativ.studio" />
        <meta name="twitter:title" content="ATIV Music" />
        <meta
          name="twitter:description"
          content="Savor the Artistry, Reap the Benefit."
        />
        <meta
          name="twitter:image"
          content="https://s3.ap-northeast-2.amazonaws.com/opengraph.ativ.studio/og_ativ.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        id="top"
        onContextMenu={() => {
          return false;
        }}
        onDragStart={() => {
          return false;
        }}
      >
        <div className="header">
          <div className="header_inside">
            <a className="logo" href="#top"></a>
            <p className="badge point">beta</p>
            <a
              className="btn portalbtn"
              href="https://portal.ativ.studio"
              target="_blank"
            >
              ATIV Portal
            </a>
          </div>
        </div>
        {children}
        <Script src="/script/star.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
