// Alternative 1: Update the provider to include the booleans in context

// MobileViewContext.js
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

  const contentIsVisibleMobile = mobileView === "main";
  const toc1IsVisibleMobile = mobileView === "toc1";
  const toc2IsVisibleMobile = mobileView === "toc2";

  return (
    <MobileViewContext.Provider value={{
      mobileView,
      setMobileView,
      contentIsVisibleMobile,
      toc1IsVisibleMobile,
      toc2IsVisibleMobile
    }}>
      {children}
    </MobileViewContext.Provider>
  );
}
