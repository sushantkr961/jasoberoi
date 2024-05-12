import React, { ReactNode } from "react";

type Props = { children?: ReactNode, className?: string };

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return <div className={`max-w-[1440px] px-5 lg:px-0 ${className}`} {...props}>{children}</div>;
};

export default Container;
