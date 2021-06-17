import React from "react";

import { getLayout } from "../components/SiteLayout";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-4 text-black dark:text-white">
        About Me
      </h1>
      <div className="text-gray-600 dark:text-gray-400">
        <p>Hey, I'm David. I'm a developer and writer.</p>
      </div>
    </div>
  );
}

About.getLayout = getLayout;
