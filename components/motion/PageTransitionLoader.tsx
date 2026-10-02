"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset loader on route complete
    setLoading(false);
    setProgress(100);
    const timeout = setTimeout(() => setProgress(0), 300);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Check if it's an internal link
      const isInternal =
        href.startsWith("/") ||
        href.startsWith("#") ||
        (href.startsWith(window.location.origin) && !href.startsWith("mailto:") && !href.startsWith("tel:"));

      if (isInternal && !target.target && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        // Start smooth top loading animation
        setLoading(true);
        setProgress(25);

        const timer1 = setTimeout(() => setProgress(65), 120);
        const timer2 = setTimeout(() => setProgress(88), 350);

        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  if (progress === 0 && !loading) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[3px] bg-transparent overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#17382b] via-[#c6ff3f] to-[#ffffff] transition-all duration-300 ease-out shadow-[0_0_12px_#c6ff3f]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? "width 200ms ease-out, opacity 300ms 150ms ease-in" : "width 300ms ease-out",
        }}
      />
    </div>
  );
}
