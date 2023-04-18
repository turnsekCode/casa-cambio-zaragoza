import Head from "next/head";
import Script from "next/script";
//import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import Section_uno from "@/componentes/Section_1/Section_uno";
import SectionDos from "@/componentes/Section_2/SectionDos";
import SectionTres from "@/componentes/Section_3/SectionTres";
import SectionCuatro from "@/componentes/Section_4/SectionCuatro";
//import Mapa from "@/componentes/Mapa/Mapa";
import Layout from "@/componentes/Layout/Layout";
import React from "react";
import { useInView } from "react-intersection-observer";

const DynamicMapa = dynamic(
  () => import(/*componente del mapa script*/ "../componentes/Mapa/Mapa.js"),
  { ssr: false, loading: () => <p>Loading...</p> }
);
const schema = {
  "@context": "http://www.schema.org",
  "@type": "Organization",
  name: "Quickgold",
  url: "https://quickgold.es/casa-cambio-barcelona/",
  sameAs: [
    "https://instagram.com/quickgold.es",
    "https://twitter.com/quickgoldqg",
    "https://www.facebook.com/quickgold.es",
  ],
  logo: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  image: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  description:
    "Casas de cambio en Barcelona. Cambia dólares a euros en nuestras oficinas de cambio quickgold. Cambio de moneda extranjera al momento y sin comisiones",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressRegion: "Cataluña",
    addressCountry: "España",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34 900 373 629",
    contactType: "info@quickgold.es",
  },
};
const breadCrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Quickgold",
      item: "https://quickgold.es/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Casa cambio Barcelona",
      item: "https://quickgold.es/casa-cambio-barcelona/",
    },
  ],
};
export default function Home({
  markers,
  menu_list,
  dataReverseVenta,
  dataReverse,
}) {
  const { ref: myRef, inView, entry } = useInView();
  return (
    <>
      <Head>
        <link
          rel="stylesheet preload prefetch"
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          as="style"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumb) }}
        ></script>
        <title>
          Casas de Cambio en Barcelona | Cambio de Divisas Barcelona
        </title>
        <meta
          name="description"
          content="Casas de cambio en Barcelona. Cambia dólares a euros en nuestras oficinas de cambio quickgold. Cambio de moneda extranjera al momento y sin comisiones. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
          <Breadcrumbs />
          <Section_uno />
          <SectionDos
            dataReverse={dataReverse}
            dataReverseVenta={dataReverseVenta}
          />
          <SectionTres />
          <SectionCuatro />

          <div
            id="contenedorMapa"
            className={styles.contenedorMapaVisible}
            ref={myRef}
          >
            {inView ? <DynamicMapa markers={markers} /> : null}
          </div>

          {/*<Mapa markers={markers} />*/}
        </div>
      </Layout>
    </>
  );
}
const idTienda = "barcelona";
//const idWp = "13848";
export async function getStaticProps() {
  /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/

  const marker = await fetch(`https://quickgold.es/markers${idTienda}.json`);
  const markers = await marker.json();

  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();

  const data = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${idTienda}.txt`
  );
  const datos = await data.json();
  const dataReverse1 = [...datos?.result?.Tarifas?.Divisas_Compra].reverse();
  const dataReverseVenta1 = [
    ...datos?.result?.Tarifas?.Divisas_Venta,
  ].reverse();
  const dataReverse = dataReverse1.filter(
    (currency) =>
      currency.Name !== "RUB" &&
      currency.Name !== "HRK" &&
      currency.Name !== "DKK"
  );
  const dataReverseVenta = dataReverseVenta1.filter(
    (currency) => currency.Name !== "HRK"
  );
  // Pass data to the page via props
  return {
    props: {
      markers,
      menu_list,
      dataReverse,
      dataReverseVenta,
    },
    revalidate: 1,
  };
}
