import React from "react";
import ItemCount from "./ItemCount";
const Item = (producto) => {
    
    return(
        <div className="card mx-auto mb-3" style={{width: 300}}>
                <img src={producto.imagen} className="card-img-top p-2" alt={producto.nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{producto.nombre}</h5>
                    <p>Marca: {producto.marca}</p>
                    <p>Modelo: {producto.modelo}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p className="card-text">Detalle:{producto.detalle}</p>
                    <ItemCount stock = {producto.cantidad} inicial = {producto.inicial} onAdd = {producto.onAdd}/>                    
                </div>
                
                
        </div>
    )

} 
export default Item;