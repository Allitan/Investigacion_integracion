'use client'
import React, { useContext, useState } from 'react'
import {  PlantillaNode } from '../Modelos/PlantilaNode'
import { Producto } from '../Modelos/Producto'
import {contexProducto} from '../Context/ContextoProducto'
import { error } from 'console'

//children
//implementacion
//exportar

export default function ProviderProducto({children}:PlantillaNode) {

  const [producto,setProducto]=useState<Producto[]>([]);
  const [carritoProducto,setCarritoProducto]=useState<Producto[]>([]);

  function agregarCarrito(item:Producto){

    setCarritoProducto([...carritoProducto,item])
  }

  async function guardarProducto(producto:Producto){
     const respuesta = await fetch("http://localhost:5000/producto",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(producto)
     });

     const data= await respuesta.json();

     alert("Producto agregado correctamente")

  }

  async function eliminarProducto(idProducto:number){
    const respuesta = await fetch(`http://localhost:5000/producto/${idProducto}`,{
      method: 'DELETE',
    });
    if(respuesta.ok){
      setCarritoProducto(prev => prev.filter(p => p.idProducto !== idProducto))
      alert("Producto eliminado correctamente");
    } else {
      alert("No se pudo eliminar el producto ");
    }
  }

  return (
    <contexProducto.Provider value={{producto,setProducto,carritoProducto,agregarCarrito,guardarProducto,eliminarProducto}}>
        {children}
    </contexProducto.Provider>
  )
}

export function useContextProducto(){
    return useContext(contexProducto)
}
