"use client";
import { UseEffect, UseRef, UseState } from "@/app/modules";

export default function useInView<T extends HTMLElement>(Observe = false) {
  const ref = UseRef<T | null>(null);
  const [isInView, setIsInView] = UseState(false);

  UseEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (Observe) {
            observer.unobserve(entry.target);
          }
        }
        else {
          setIsInView(false)
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return { ref, isInView };
}
