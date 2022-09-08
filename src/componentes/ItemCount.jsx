
import React from "react";
import { useState } from "react";

const ItemCount = (prop) => {
    const [cantidad, setCantidad] = useState(prop.inicial);
    const [itemStock, setItemStock] = useState(prop.stock);
    const [itemOnAdd, setItemOnAdd] = useState(prop.onAdd);
   

    const decrementarCantidad = (valor) => {
        if(valor > 0){
            setCantidad(valor);
        }
    }
    const incrementarCantidad = (valor) => {
        if(valor <= itemStock){
            setCantidad(valor);
        }
    }
    const agregarProducto = () => {
        if(cantidad <= itemStock){
            setItemStock(itemStock - cantidad);
            setItemOnAdd(itemOnAdd + cantidad);
        }
        

    }

    return(
        <div>
           <div className="input-group mb-3">
                <input type="button" className="btn btn-info" value= "-" onClick={() => {decrementarCantidad(cantidad - 1)}}/>
                <input type="text" className="form-control col-2" aria-label="Amount (to the nearest dollar)" value={cantidad}/>
                <input type="button" className="btn btn-info" value= "+" onClick={() => {incrementarCantidad(cantidad + 1)}}/>
            </div>
            <div class="d-grid gap-2">
                <button className="btn btn-info" type="button" onClick={() => {agregarProducto()}}>Agregar</button>
            </div>
            <p>Productos seleccionados {itemOnAdd}</p>
        </div>

    )

} 
export default ItemCount;