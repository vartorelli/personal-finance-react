"use client";
import DoughnutChart from "@/components/DoughnutChart";
import { Modal } from "@/components/Modal";
import React, { useState } from "react";
import { initialData } from "@/data/Data";


export default function Balance() {
  const Gastos = [],
    Ingresos = [];
  initialData.map((el) => {
    el.dato === "Gastos" ? Gastos.push(el) : Ingresos.push(el);
  });
  let totalGastos = 0;
  let totalIngresos = 0;
  Gastos.map((el) => {
    totalGastos = totalGastos + el.cantidad;
  });
  Ingresos.map((el) => {
    totalIngresos = totalIngresos + el.cantidad;
  });
  const data = {
    labels: ["Gastos", "Ingresos"],
    datasets: [
      {
        label: "Cantidad",
        data: [totalGastos, totalIngresos],
        backgroundColor: ["red", "green"],
        borderColor: ["red", "green"],
      },
    ],
  };
  const options = {};
  return (
    <section>
      <h1>Balance</h1>
      <button className="btn-movement">Agregar Movimientos</button>
      <Modal/>
      <div>
        <DoughnutChart data={data} options={options} />
      </div>
      <h3>Ultimos {initialData.length} Movimientos</h3>
      <ul>
        {initialData.reverse().map((el) => (
          <li key={el.id}>
            {el.dato} - {el.cantidad} - {el.message}
          </li>
        ))}
      </ul>
      <h2>Total movimientos {initialData.length}</h2>
    </section>
  );
}
