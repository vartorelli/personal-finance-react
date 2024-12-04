import React from 'react'

export default function NewAccount() {
  return (
    <section>
        <h2>Cuenta Nueva</h2>
        <form>
            <p>Nombre de Usuario</p>
            <input type="text" />
            <p>Contraseña</p>
            <input type="text" />
            <p>Repetir Contraseña</p>
            <input type="text" />
            <p>Email</p>
            <input type="email" />
            <p><input type="checkbox"/> Acepta los <a href="">terminos y condiciones</a></p>
            <input type="submit" value={"Crear cuenta"} />
        </form>
    </section>
  )
}
