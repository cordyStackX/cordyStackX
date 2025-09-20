import { useRef, MutableRefObject } from "react";

export default function useGlobalRef<T>(initialValue: T | null = null): MutableRefObject<T | null> {
  return useRef<T | null>(initialValue);
}
