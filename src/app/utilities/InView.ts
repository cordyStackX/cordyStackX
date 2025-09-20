"use client";
import { UseEffect, UseRef, UseState } from "@/app/modules";

export default function useInView<T extends HTMLElement>() {
  const ref = UseRef<T | null>(null);
  const [isInView, setIsInView] = UseState(false);

  UseEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return { ref, isInView };
}
