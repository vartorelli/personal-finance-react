'use client'
import React, { useState } from 'react'

const initialDataMovement = {
    dato:'',
    cantidad:new Number,
    message:'',
    id:new Number
}
export const Modal = () => {
    // const [dataMovement,setDataMovement] = useState(initialDataMovement);
    // const [data, setData] = useState(initialData)

    const handleChange = () => {
        // setDataMovement({
        //     dato: document.querySelector(".dato").value,
        //     cantidad: document.querySelector(".cantidad").value,
        //     message: document.querySelector(".message").value,
        //     id: initialData.length+1
        // })
    }
    const handleSubmit = (e) => {
        // e.preventDefault()
        // console.log(dataMovement)
        // setData([...data, dataMovement])
    }
  return (
    <article className='form-movement is-close'>
        <form onSubmit={handleSubmit}>
            <label>Tipo de Movimiento</label>
            <select onChange={handleChange}>
                <option className='dato' value="Gastos" key="1">Gastos</option>
                <option className='dato' value="Ingresos" key="2">Ingresos</option>
            </select>
            <label>Cantidad</label>
            <input className='cantidad' type='number' placeholder='Ej: 15000' onChange={handleChange}/>
            <label>Mensaje</label>
            <input className="message" type="text" placeholder='A que se debe el movimiento' onChange={handleChange}/>
            <input type="submit" value='Enviar' />
        </form>
    </article>
  )
}
