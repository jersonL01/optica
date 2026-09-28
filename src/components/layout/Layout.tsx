import type { ReactNode } from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
  currentPath: string;
}

export default function Layout({ children, currentPath }: LayoutProps) {
  return (
    <>
      <Navbar currentPath={currentPath} />
      <main className="bg-[#fbfaf7]">{children}</main>
      <Footer />
    </>
  );
}
