'use client'
import React from "react";

export default function Movement() {
  const dataMovement = [
    { dato: "Gasto", cantidad: "$1000", message: "SUBE" },
    { dato: "Ingresos", cantidad: "$23500", message: "Venta Celular" },
    { dato: "Gasto", cantidad: "$4500", message: "Telefono Linea" },
    { dato: "Ingresos", cantidad: "$2500", message: "Devolución prestamo" },
  ];
  const dataMovementGastos = [];
  dataMovement.map((el) => {
    if (el.dato === "Gasto") {
      dataMovementGastos.push(el);
    }
  });
  const dataMovementIngresos = [];
  dataMovement.map((el) => {
    if (el.dato === "Ingresos") {
      dataMovementIngresos.push(el);
    }
  });
  const handleClickGastos = () => {
    document.getElementById("gastos").toggleAttribute("hidden");
    document.getElementById("total-movement").toggleAttribute("hidden");
    const btnGastos = document.querySelector(".btn-gastos")
    console.log(btnGastos.className)
    if(btnGastos.className==="btn-gastos active"){
      btnGastos.className = "btn-gastos"
      btnGastos.textContent = "Mostrar Total de Movimientos"
    } else {
      btnGastos.className = "btn-gastos active"
      btnGastos.textContent = "Mostrar Gastos"

    }
  };
  const handleClickIngresos = () => {
    document.getElementById("ingresos").toggleAttribute("hidden");
    document.getElementById("total-movement").toggleAttribute("hidden");
    const btnIngresos = document.querySelector(".btn-ingresos")
    console.log(btnIngresos.className)
    if(btnIngresos.className==="btn-ingresos active"){
      btnIngresos.className = "btn-ingresos"
      btnIngresos.textContent = "Mostrar Total de Movimientos"
    } else {
      btnIngresos.className = "btn-ingresos active"
      btnIngresos.textContent = "Mostrar Ingresos"

    }
  };
  return (
    <section className="movement">
      {console.log(dataMovementGastos)}
      <button className="btn-gastos active" onClick={handleClickGastos}>Mostrar Gastos</button>
      <button className="btn-ingresos active" onClick={handleClickIngresos}>Mostrar Ingresos</button>
      <div id="gastos" hidden>
        <h2>Total de Gastos</h2>
        <ul>
          {dataMovementGastos.map((el) => (
            <li key={crypto.randomUUID()}>
              {el.dato} - {el.cantidad} - {el.message}
            </li>
          ))}
        </ul>
      </div>
      <div id="ingresos" hidden>
        <h2>Total de Ingresos</h2>
        <ul>
          {dataMovementIngresos.map((el) => (
            <li key={Math.random()}>
              {el.dato} - {el.cantidad} - {el.message}
            </li>
          ))}
        </ul>
      </div>
      <div id="total-movement">
        <h2>Todos los movimientos</h2>
        <ul>
          {dataMovement.map((el) => (
            <li key={Math.random()}>
              {el.dato} - {el.cantidad} - {el.message}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
