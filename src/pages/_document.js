import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <script
        defer
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="66a968ad-70de-4703-81be-84844ed28395"
        data-blockingmode="auto"
        type="text/javascript"
        // strategy="lazyOnload"
      ></script>
      <script
        defer
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/66a968ad-70de-4703-81be-84844ed28395/cd.js"
        type="text/javascript"
        //strategy="lazyOnload"
      ></script>
      <script
        defer
        //property="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MBQXFCS');`,
        }}
      ></script>

      <link
        rel="stylesheet preconnect"
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        as="style"
      ></link>
      <Head />
      <body>
        <noscript
          defer
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBQXFCS"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
