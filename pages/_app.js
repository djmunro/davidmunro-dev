import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";

import { SiteLayout } from "components/layouts/SiteLayout";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout children={page} />);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider>{layout}</MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
