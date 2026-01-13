"use client";

import React, { createContext, useEffect, useState } from "react";

export const FontsContext = createContext<{ loaded: boolean }>({
  loaded: false,
});

export function FontsProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState<boolean>(
    () => !!(typeof window !== "undefined" && (window as any).__fontsReady)
  );

  useEffect(() => {
  

    if ((window as any).__fontsReady) {
      setLoaded(true);
      return;
    }
    (document.fonts?.ready ?? Promise.resolve())
      .then(() => {
        (window as any).__fontsReady = true;
        setLoaded(true);
      })
      .catch(() => {
        (window as any).__fontsReady = true;
        setLoaded(true);
      });
  }, []);

  return (
    <FontsContext.Provider value={{ loaded }}>{children}</FontsContext.Provider>
  );
}
