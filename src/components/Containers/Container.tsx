import React, { ReactNode } from "react";

type Props = { children?: ReactNode, className?: string,[key: string]: any  };

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return <div className={`max-w-[1440px] px-5 lg:px-2 ${className}`} {...props}>{children}</div>;
};

export default Container;
