import React from "react";

interface AdSenseProps {
  pId: string;
}

const AdSense: React.FC<AdSenseProps> = ({ pId }) => {
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
    ></script>
  );
};

export default AdSense;
