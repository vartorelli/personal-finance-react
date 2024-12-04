"use client";
import React, { useState, useRef } from "react";
import "../../../css/style.css";

export default function Login() {
  const userRef = useRef();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const handleSubmit = () => {
    if (!login) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      document.getElementById("password").focus();
    }
  };

  return (
      <section className="login-page">
        {login ? (
          <div className="login">
            <h1>Has iniciado sesion con {user}</h1>
            <button className="btn-login" onClick={handleSubmit}>
              Cerrar sesión
            </button>
            <a href="http://localhost:3000/perfil">Ir al perfil</a>
          </div>
        ) : (
          <div className="login">
            <h2>Inicio de sesión</h2>
            <form onSubmit={handleSubmit}>
              <p>Usuario:</p>
              <input
                id="user"
                type="text"
                placeholder="User"
                value={user}
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                onKeyDown={handleKeyDown}
                required
              />
              <p>Contraseña:</p>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                onKeyDown={(e) => {
                  e.key === "Enter" ? handleSubmit() : console.log("");
                }}
              />
              <input
                type="submit"
                className="btn-login"
                value={"Iniciar sesion"}
              />
            </form>
            <a className="new-account" href="http://localhost:3000/new-account">
              Crear cuenta
            </a>
            <a className="forget-password" href="http://localhost:3000/">
              Has olvidado la Contraseña
            </a>
          </div>
        )}
      </section>
  );
}
