import React from "react";
import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/twxntytwo_/",
    icon: "/icons/socials/instagram.svg",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@twxntytwo",
    icon: "/icons/socials/youtube.svg",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@twxntytwo_",
    icon: "/icons/socials/tiktok.svg",
  },
  {
    name: "X",
    url: "https://x.com/twxntytwo_",
    icon: "/icons/socials/x.svg",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-3 lg:space-x-5 xl:space-x-7 md:justify-self-end z-20 row-start-3 md:row-start-auto md:row-end-auto">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          aria-label={link.name}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-200 p-1 rounded-md"
        >
          <Image src={link.icon} alt={link.name} width={24} height={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
