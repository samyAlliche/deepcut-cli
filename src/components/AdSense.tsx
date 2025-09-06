import Script from "next/script";
import React from "react";

interface AdSenseProps {
  pId: string;
}

const AdSense: React.FC<AdSenseProps> = ({ pId }) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
