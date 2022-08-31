import React from "react";

const Carrito = ({cantidad}) => {
    return(
        <div>
            <button className="btn btn-info my-2 my-sm-0" name="mostrar">{cantidad}<label id="contadorProductos"></label><i className="material-icons">shopping_cart</i></button>
        </div>
    )

} 
export default Carrito;
