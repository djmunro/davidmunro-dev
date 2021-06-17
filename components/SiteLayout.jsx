import React from "react";

import { useTheme } from "next-themes";

export const SiteLayout = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-black">
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        click me
      </button>
      {children}
    </div>
  );
};
