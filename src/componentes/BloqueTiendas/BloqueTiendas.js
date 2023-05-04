import React, { useRef } from "react";
import styles from "./bloqueTiendas.module.css";

const BloqueTiendas = ({ markers, setShowPopup, setShowInfo }) => {
  const marcador = markers.arrayMarker;
  const toggleTab = () => {
    setShowPopup(true);
  };
  const mapRef = useRef();
  const onSelectMarker = (marker) => {
    setShowInfo({
      longitude: marker.longitude,
      latitude: marker.latitude,
      tienda: marker.tienda,
      telefono: marker.telefono,
      direccion: marker.direccion,
      comoLlegar: marker.comoLlegar,
      nombreTienda: marker.nombreTienda,
      duration: marker.duration,
      zoom: marker.zoom,
    });
    mapRef.current?.flyTo({
      center: { lng: marker.longitude, lat: marker.latitude },
      duration: 1500,
      zoom: 11,
    });
  };
  return (
    <div className={styles.contenedorTiendas}>
      {marcador.map((marker) => (
        <div
          className={styles.tienda}
          onClick={() => {
            toggleTab();
            onSelectMarker(marker);
          }}
        >
          <h3>{marker.nombreTienda}</h3>
          <p>{marker.direccion}</p>
          <a title={marker.nombreTienda} href={`tel:${marker.telefono}`}>
            <p>Teléfono: {marker.telefono}</p>
          </a>
          <a href={marker.direccion}>Cómo llegar</a>
        </div>
      ))}
    </div>
  );
};

export default BloqueTiendas;
