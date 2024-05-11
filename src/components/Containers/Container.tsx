import React, { ReactNode } from "react";

type Props = { children?: ReactNode };

const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-[1340px]">{children}</div>;
};

export default Container;
