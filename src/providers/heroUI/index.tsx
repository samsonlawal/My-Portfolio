"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

export function RadixProvider({ children }: { children: React.ReactNode }) {
  return <Tooltip.Provider delayDuration={150}>{children}</Tooltip.Provider>;
}
