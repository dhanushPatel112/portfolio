import "@/styles/globals.css";
import { initFirebase } from "@/util/firebase";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initFirebase();
  }, []);

  return <Component {...pageProps} />;
}
