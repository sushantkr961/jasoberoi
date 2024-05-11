import React, { ReactNode } from "react";

type Props = { children?: ReactNode, className?: string };

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return <div className={`  ax-w-[1340px] ${className}`} {...props}>{children}</div>;
};

export default Container;
