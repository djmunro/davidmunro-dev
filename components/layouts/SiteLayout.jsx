import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const SiteLayout = ({ children }) => {
  return (
    <div className="antialiased bg-white dark:bg-black">
      <div className="h-screen max-w-4xl mx-auto px-8">
        <Header />
        <main className="mt-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
