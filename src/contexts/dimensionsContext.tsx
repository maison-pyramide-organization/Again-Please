"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export const DimensionContext = createContext<any>({
  width: 0,
  height: 0,
  isMobile: null,
});

export function DimensionProvider({ children }: { children: ReactNode }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(null) as any;

  useEffect(() => {
    const update = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.innerWidth > 770 ? setIsMobile(false) : setIsMobile(true);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <DimensionContext.Provider value={{ ...dimensions, isMobile }}>
      {children}
    </DimensionContext.Provider>
  );
}
