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
        className="text-[16px] md:text-[15px]  md:leading-6 text-white hover:text-slate-300 duration-100 flex items-center font-[300] min-w-[160px] md:justify-start justify-center "
      >
        <Icon size={20} className="mr-1 hidden md:block" /> {text}
      </a>
    </li>
  );
};

export default Link;
