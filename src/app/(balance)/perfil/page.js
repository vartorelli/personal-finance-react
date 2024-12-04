import React from "react";
import '../../../css/style.css'

export default function Perfil() {
    let user = 'Varto'
  return (
    <section className="perfil">
      <h2>Perfil de {user}</h2>
      <nav className="navegation">
        <a href="/balance">Balance</a>
        <a href="/movement">Movimientos</a>
        <a href="/config">Configuraciones</a>
        <a href="/login">Cerrar sesion</a>
      </nav>
    </section>
  );
}
