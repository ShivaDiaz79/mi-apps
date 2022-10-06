import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio({ imagen, nombre, pais, cargo, empresa, testimonio }) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/proyecto-${imagen}.png`)}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre} </strong>en {pais}
        </p>
        <p className="cargo-testimonio">
          {cargo} en<strong> {empresa}</strong>
        </p>
        <p className="texto-testimonio">"{testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;
