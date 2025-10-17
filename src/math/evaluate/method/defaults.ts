import { Definition } from "./index.ts";

export const defaults: Record<string, Definition> = {
  sin: { calculateFn: Math.sin },
  cos: { calculateFn: Math.cos },
  tan: { calculateFn: Math.tan },
  sqrt: { calculateFn: Math.sqrt, checkFn: (x) => x >= 0 },
  log: { calculateFn: Math.log, checkFn: (x) => x > 0 },
  abs: { calculateFn: Math.abs },
  pow: { calculateFn: Math.pow },
};
