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
  const adPushed = useRef(false); // Create a ref to track if the ad has been pushed

  useEffect(() => {
    // Only push the ad if it hasn't been pushed before for this component instance.
    if (adPushed.current) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      // Set the ref to true so this doesn't run again on the second mount in Strict Mode.
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
      {/*
        This <ins> element is the placeholder where Google AdSense will inject the ad.
        - `adsbygoogle` class is required for the script to identify it.
        - `data-ad-client` and `data-ad-slot` are your specific AdSense identifiers.
        - `data-ad-format="fluid"` tells AdSense to create a responsive ad that adapts to the container size.
        - `data-full-width-responsive="true"` is an additional hint for better responsiveness.
      */}
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
