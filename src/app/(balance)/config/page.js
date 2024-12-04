'use client'

import React from "react";
import "../../../css/style.css"

export default function Config() {
  const handleClickPerfil = () => {
        document.getElementById("perfil-nav").toggleAttribute("hidden")
  };
  const handleClickSeguridad = () => {
        document.getElementById("security-nav").toggleAttribute("hidden")
  };
  const handleClickAplicacion = () => {
        document.getElementById("application-nav").toggleAttribute("hidden")
  };
  
  return (
    <section className="panel">
      <h3 className="config-title">Panel de configuraciones</h3>
      <button id="perfil" className="btn-primary" onClick={handleClickPerfil}>Editar Perfil</button>
      <div id="perfil-nav" hidden>
        <button className="btn-secundary">Nombre</button>
        <button className="btn-secundary">Foto</button>
      </div>
      <button id="security" className="btn-primary" onClick={handleClickSeguridad}>Seguridad</button>
      <div id="security-nav" hidden>
        <button className="btn-secundary">Cambiar Contraseña</button>
        <button className="btn-secundary">Email</button>
      </div>
      <button id="aplicacion" className="btn-primary" onClick={handleClickAplicacion}>Configuración aplicación</button>
      <div id="application-nav" hidden>
        <button className="btn-secundary">Moneda o divisa</button>
        <button className="btn-secundary">Idioma</button>
      </div>
      <a id="home" className="btn-primary" href="/perfil">Volver a Perfil</a>
    </section>
  );
}
