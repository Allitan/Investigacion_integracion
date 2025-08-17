'use client'
import { Producto } from "@/app/Modelos/Producto"
import { useContextProducto } from "@/app/Providers/ProviderProducto"
import React, { useState, useEffect, use } from "react"
import { useParams, useRouter } from "next/navigation"

export default function page(){
    const { producto, actualizarProducto } = useContextProducto();
    const params = useParams();
    const router = useRouter();

    const idProducto = parseInt(params.id as string);

    const productoExistente = producto.find(p => p.idProducto === idProducto);

    const [nombreProducto, setNombreProducto] = useState<string>('');
    const [precioProducto, setPrecioProducto] = useState<string>('');
    const [isvProducto, setIsvProducto] = useState<string>('');
    const [imgProducto, setImgProducto] = useState<string>('');

    useEffect(()=> {
        if(productoExistente){
            setNombreProducto(productoExistente.nombreProducto);
            setPrecioProducto(productoExistente.precioProducto.toString());
            setIsvProducto(productoExistente.isvProducto.toString());
            setImgProducto(productoExistente.imgProducto);
        }
    }, [productoExistente]);

    function actualizarProductoCompra(){
        if (!productoExistente) return;

        const producto: Producto = {
            idProducto: idProducto,
            nombreProducto: nombreProducto,
            precioProducto: parseFloat(precioProducto),
            isvProducto: parseFloat(isvProducto),
            imgProducto: imgProducto
        };

        actualizarProducto(producto);
        alert("Producto actualizado correctamente...")
        router.push('/');
    }

    return (
        <div className="container">
            <h5> Actualizar Producto</h5>

            <form action='' className="form-control">
                <input type="text" placeholder="Nombre Producto" className="form-control" value={nombreProducto}
                onChange={(e) => setNombreProducto(e.target.value)}></input> <br />

                <input type="text" placeholder="Ingrese precio Producto" className="form-control" value={precioProducto}
                onChange={(e) => setPrecioProducto(e.target.value)}></input> <br />
                
                <input type="text" placeholder="ISV Producto" className="form-control" value={isvProducto}
                onChange={(e) => setIsvProducto(e.target.value)}></input> <br />

                <input type="text" placeholder="URL imagen" className="form-control" value={imgProducto}
                onChange={(e) => setImgProducto(e.target.value)}></input> <br />

                <button type="button" className="btn btn-warning" onClick={actualizarProductoCompra}>
                    Actualizar Producto
                </button>
            </form>

        </div>
    )
}