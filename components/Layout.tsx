import React, { ReactNode } from "react";
import Navbar from "components/navbar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="dark">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
