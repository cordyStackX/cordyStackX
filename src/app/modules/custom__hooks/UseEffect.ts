import { useEffect } from "react";

interface UseEffectProps {
  callback: () => void | (() => void);
  deps?: React.DependencyList;
  limiter?: boolean;
}

export default function UseEffect({ callback, deps = [], limiter = true }: UseEffectProps) {
  useEffect(callback, limiter ? deps : undefined);
}
