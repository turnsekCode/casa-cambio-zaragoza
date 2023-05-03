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
          Casas de cambio en <span className={styles.linea}>Vigo</span>
        </h1>
        <p>
          Nuestra oficina de cambio de divisas en Vigo se encuentra en Rúa de
          Urzaiz número 80. Visítanos para cambiar moneda extranjera al mejor
          tipo de cambio de toda la provincia de Pontevedra.
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
          <a href="tel:900 373 629" title="Teléfono">
            llama gratis al 900 373 629
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        {width <= 610 ? (
          <img
            src="/vigo_mobil.webp"
            alt="Casas de cambio vigo"
            className={styles.madridMobil}
            width={290}
            height={220}
          />
        ) : (
          <img
            src="/vigo.webp"
            alt="Casas de cambio vigo"
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
