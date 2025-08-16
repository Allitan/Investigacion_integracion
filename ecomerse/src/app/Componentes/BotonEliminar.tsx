import React from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextProducto } from '../Providers/ProviderProducto' 

type BotonEliminarProps = {
  idProducto: number
}

export default function BotonEliminar({idProducto}: BotonEliminarProps) {

  const { eliminarProducto } = useContextProducto();
  return (
    <button className='btn btn-danger' type='button' onClick={()=>eliminarProducto(idProducto)}>Eliminar Producto</button>
  )
}
