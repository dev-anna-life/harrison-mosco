"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .ep-card, .service, .step, .why-item, .process-item, .package-card, .ep-package, .ep-pathway").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    });

    const initElements = () => {
      // 1. Target elements with explicit reveal classes or data-reveal
      const explicitElements = document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, [data-reveal]"
      );

      // 2. Auto-target key content cards and sections that should animate smoothly
      const autoElements = document.querySelectorAll(
        ".ep-card, .service, .step, .why-item, .process-item, .package-card, .ep-package, .ep-pathway, .deliverable"
      );

      const allElements = new Set([...Array.from(explicitElements), ...Array.from(autoElements)]);

      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (!htmlEl.classList.contains("reveal") &&
            !htmlEl.classList.contains("reveal-up") &&
            !htmlEl.classList.contains("reveal-left") &&
            !htmlEl.classList.contains("reveal-right") &&
            !htmlEl.classList.contains("reveal-scale")) {
          htmlEl.classList.add("reveal-up");
        }

        // Apply staggering if inside a grid/flex container
        const parent = htmlEl.parentElement;
        if (parent && (parent.classList.contains("deliverables") ||
                       parent.classList.contains("service-grid") ||
                       parent.classList.contains("why-list") ||
                       parent.classList.contains("process") ||
                       parent.classList.contains("grid") ||
                       parent.dataset.stagger !== undefined)) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(htmlEl);
          if (index > 0 && !htmlEl.style.transitionDelay) {
            htmlEl.style.transitionDelay = `${Math.min(index * 70, 500)}ms`;
          }
        }

        // Immediate reveal check for above-the-fold content
        const rect = htmlEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // In initial viewport
          setTimeout(() => {
            htmlEl.classList.add("revealed");
          }, 60);
        } else {
          observer.observe(htmlEl);
        }
      });
    };

    // Run on mount
    initElements();

    // Re-run if DOM changes (e.g. dynamic state changes or tabs)
    const mutationObserver = new MutationObserver(() => {
      initElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
