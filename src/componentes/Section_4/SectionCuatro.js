import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Vigo</span>
        </h2>
        <p>
          ¿Estás en Vigo y necesitas cambiar divisa? En nuestra oficina de
          cambio obtendrás el mejor tipo de cambio de toda la ciudad. Consigue
          euros en efectivo para tus compras o transacciones internacionales.
          Recuerda que realizamos mejoras en el tipo de cambio de divisa por
          cantidad, pregúntanos y estaremos encantados de atenderte sin
          compromiso.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-vigo.webp"
          alt="Cambiar Dólares a Euros vigo"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
