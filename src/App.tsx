import { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Reserva from "./pages/Reserva";
import Service from "./pages/Service";

const pages = [
  { path: "/", component: Home },
  { path: "/servicios", component: Service },
  { path: "/productos", component: Product },
  { path: "/reserva", component: Reserva },
  { path: "/contacto", component: Contact },
] as const;

const pagePaths = new Set<string>(pages.map((page) => page.path));

function normalizePath(path: string) {
  const normalized = path.replace(/\/+$/, "");

  if (!normalized || normalized === "/index.html") {
    return "/";
  }

  return normalized;
}

function getCurrentPath() {
  const hashRoute = window.location.hash.startsWith("#/")
    ? window.location.hash.slice(1)
    : "";

  return normalizePath(hashRoute || window.location.pathname);
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);
  const route = pages.find((page) => page.path === currentPath) ?? pages[0];
  const CurrentPage = route.component;

  useEffect(() => {
    const syncRoute = () => {
      setCurrentPath(getCurrentPath());
    };

    const handleInternalLinks = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor || anchor.target) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      const url = new URL(anchor.href);

      if (url.origin !== window.location.origin) {
        return;
      }

      const nextPath = normalizePath(url.pathname);

      if (!pagePaths.has(nextPath)) {
        return;
      }

      event.preventDefault();

      if (nextPath !== currentPath) {
        window.history.pushState({}, "", nextPath);
        setCurrentPath(nextPath);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);
    document.addEventListener("click", handleInternalLinks);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
      document.removeEventListener("click", handleInternalLinks);
    };
  }, [currentPath]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPath]);

  return (
    <Layout currentPath={route.path}>
      <CurrentPage />
    </Layout>
  );
}
