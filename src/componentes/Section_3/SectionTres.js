import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Necesitas una oficina de cambio en
            <span className={styles.linea}> Vigo?</span>
          </h2>
          <p>
            <span>
              Quickgold es tu Money Exchange cerca de ti en la ciudad de Vigo.
              Cambia dólares por euros en tan solo unos minutos y llévate tu
              dinero en efectivo.{" "}
            </span>
            Tenemos más de 30 divisas disponibles, desde dólares a libras
            pasando por dirhams, reales y pesos, tú eliges la divisa que
            necesitas cambiar.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cómo cambiar divisa?</h2>
          <p>
            Cambiar divisa en Vigo es muy fácil y rápido. Ven a nuestra casa de
            cambio y trae tu divisa, nosotros te daremos euros en efectivo al
            momento y siempre con la mejor tasa de cambio de la ciudad.
          </p>
        </div>
      </div>
      <h1>
        Cambiar divisa en <span className={styles.linea}>Vigo</span> es muy
        fácil
      </h1>
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>Indícanos la divisa que quieres cambiar</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>Acordamos precio. ¡Hacemos mejoras por cantidad!</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>Recibe el dinero en efectivo al instante</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
