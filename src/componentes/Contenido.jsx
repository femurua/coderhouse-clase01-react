import React from "react";
import foto1 from "./img/material1.jpg";
import ItemCount from "./ItemCount";

const Productos = () => {
    let titulo = "Azulejo";
    let marca = "Azulejito";
    let modelo = "color-01";
    let precio = 200;
    let detalle = "Tamaño: 15x15cm Color: Aleatorio";
    let stock = 5;
    let inicial = 1;
    let onAdd = 0;
    const producto = {titulo:titulo, marca:marca, modelo:modelo, precio:precio, detalle:detalle, stock:stock, inicial:inicial, onAdd:onAdd}
    return(
        <div className="card mx-auto mb-3" style={{width: 300}}>
                <img src={foto1} className="card-img-top" alt={producto.titulo}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{producto.titulo}</h5>
                    <p>Marca: {producto.marca}</p>
                    <p>Modelo: {producto.modelo}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p className="card-text">Detalle:{producto.detalle}</p>
                    <ItemCount stock = {producto.stock} inicial = {producto.inicial} onAdd = {producto.onAdd}/>                    
                </div>
                
                
        </div>
    )

} 
export default Productos;