import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import useScreenSize from "@/utilities/useScreenSize";

const Section_uno = () => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Casas de cambio en <span className={styles.linea}>Zaragoza</span>
        </h1>
        <p>
          Visita nuestro money exchange en Zaragoza y cambia dólares por euros o
          cualquier otra moneda al instante. Consigue el mejor tipo de cambio en
          nuestra oficina de cambio en Zaragoza.
        </p>
        <div className={styles.botones}>
          <Link
            to="contenedorMapa"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <LocationOnOutlinedIcon />
            encuentra tu tienda
          </Link>
          <a href="tel:900373629" title="Teléfono">
            llama gratis
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        {width <= 610 ? (
          <img
            src="/divisa-mobil.webp"
            alt="Casas de cambio Zaragoza"
            className={styles.madridMobil}
            width={290}
            height={220}
          />
        ) : (
          <img
            src="/divisa.webp"
            alt="Casas de cambio Zaragoza"
            className={styles.vector}
            width={480}
            height={364}
          />
        )}
      </div>
    </section>
  );
};

export default Section_uno;
