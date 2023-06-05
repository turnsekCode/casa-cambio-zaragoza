import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Zaragoza</span>
        </h2>
        <p>
          Tanto si vives en Zaragoza como si estás visitando Basílica de Nuestra
          Señora del Pilar, tienes la suerte de tener una casa de cambio
          Quickgold para que cambiar divisa sea un proceso sencillo y rápido.
          Recuerda que en nuestra casa de cambio en Zaragoza realizamos mejoras
          en el tipo de cambio por cantidad. Indícanos tus necesidades y, sin
          compromiso, te asesoraremos y te ofreceremos el mejor tipo de cambio
          de la ciudad. Cambia moneda extranjera en Zaragoza de manera fácil y
          rápida.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-zaragoza.webp"
          alt="Cambiar Dólares a Euros zaragoza"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
