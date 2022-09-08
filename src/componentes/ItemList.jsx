import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.map(item => 
                <Item  
                key={item.id} 
                categoria={item.categoria} 
                nombre={item.nombre} 
                marca={item.marca} 
                modelo={item.modelo} 
                precio={item.precio} 
                cantidad={item.cantidad} 
                inicial={item.inicial} 
                onAdd={item.onAdd} 
                detalle={item.detalle} 
                imagen={item.imagen} />)}
        </div>
    )

} 
export default ItemList;