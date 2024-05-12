import React, { ReactElement } from "react";

type Props = {
  Icon: React.ComponentType<{ size: number; className: string }>;
  text: string;
  url?: string;
  index?: number;
};

const Link: React.FC<Props> = ({ Icon, text, url, index }) => {
  return (
    <li key={index}>
      <a
        href={url}
        className="text-[15px] leading-6 text-white hover:text-white flex items-center font-[300] min-w-[160px] w-auto"
      >
        <Icon size={20} className="mr-1" /> {text}
      </a>
    </li>
  );
};

export default Link;
