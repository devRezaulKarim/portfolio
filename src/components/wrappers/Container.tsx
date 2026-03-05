import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="px-4">
      <div className="relative mx-auto w-full max-w-3xl">{children}</div>
    </div>
  );
}
