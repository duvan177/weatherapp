import LayoutApp from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: any) {
  return (
    <LayoutApp>
      <Component {...pageProps} />
    </LayoutApp>
  );
}
