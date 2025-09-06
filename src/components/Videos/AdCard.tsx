import { useEffect } from "react";
import clsx from "clsx";

declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[];
  }
}

interface AdCardProps {
  /**
   * Optional additional class names for styling.
   */
  className?: string;
  /**
   * Your Google AdSense publisher ID (e.g., "ca-pub-xxxxxxxxxxxxxxxx").
   */
  adClient: string;
  /**
   * The ID of the specific ad slot this component should render.
   */
  adSlot: string;
  /**
   * The layout key for fluid ad formats, provided by AdSense.
   */
  adLayoutKey?: string;
}
export default function AdCard({
  className,
  adClient,
  adSlot,
  adLayoutKey,
}: AdCardProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense failed to initialize:", err);
    }
  }, []); // The empty dependency array ensures this effect runs only once on mount.

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
