import React, { createContext, useState, useEffect } from "react";

export const MobileViewContext = createContext();

export function MobileViewProvider({ children }) {
  const initialView = localStorage.getItem("mobileView") || "main";
  const [mobileView, setMobileView] = useState(initialView);

  useEffect(() => {
    localStorage.setItem("mobileView", mobileView);
    localStorage.setItem("contentIsVisibleMobile", mobileView === "main");
    localStorage.setItem("toc1IsVisibleMobile", mobileView === "toc1");
    localStorage.setItem("toc2IsVisibleMobile", mobileView === "toc2");
  }, [mobileView]);

  return (
    <MobileViewContext.Provider value={{ mobileView, setMobileView }}>
      {children}
    </MobileViewContext.Provider>
  );
}
