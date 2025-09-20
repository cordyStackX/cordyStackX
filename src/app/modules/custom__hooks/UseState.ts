import { useState, Dispatch, SetStateAction } from "react";

export default function UseState<T>(
  initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  return useState(initialValue);
}