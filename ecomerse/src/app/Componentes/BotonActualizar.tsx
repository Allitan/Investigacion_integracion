import React from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextProducto } from '../Providers/ProviderProducto'
import Link from 'next/link'

export default function BotonActualizar({idProducto}: Producto) {

  return (
    <Link href={`/actualizarProducto/${idProducto}`}>
        <button className='btn btn-warning' type='button'>Actualizar Producto</button>
    </Link>
  )
}
