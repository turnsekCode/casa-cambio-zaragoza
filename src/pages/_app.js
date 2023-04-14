import "@/styles/globals.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import Script from "next/script";
//import Layout from "@/componentes/Layout/Layout";

export default function App({ Component, pageProps }) {
  /*const gtmId = process.env.NEXT_PUBLIC_GTM || "";
  const tagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);*/
  return <Component {...pageProps} />;
}
