"use client";
import { useEffect, useRef } from "react";
import clsx from "clsx";

declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[];
  }
}

interface AdCardProps {
  className?: string;
  adClient: string;
  adSlot: string;
  adLayoutKey?: string;
}
export default function AdCard({
  className,
  adClient,
  adSlot,
  adLayoutKey,
}: AdCardProps) {
  const adPushed = useRef(false);

  useEffect(() => {
    if (adPushed.current) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adPushed.current = true;
    } catch (err) {
      console.error("AdSense failed to initialize:", err);
    }
  }, []);
  return (
    <div
      className={clsx(
        "relative w-full aspect-square overflow-hidden rounded-lg bg-card shadow-md",
        className
      )}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-layout-key={adLayoutKey}
        data-ad-format="fluid"
      ></ins>
    </div>
  );
}
