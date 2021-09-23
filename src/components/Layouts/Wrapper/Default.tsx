import React from "react";

export const DefaultLayout: React.FC = ({ children }) => {
  return <div className="grid place-content-center h-screen">{children}</div>;
};
