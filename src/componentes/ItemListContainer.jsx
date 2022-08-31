import React from "react";

const ItemListContainer = (greeting) => {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto">
           <h1 className="p-3 fs-2 border-top border-3">{greeting.titulo}</h1>
            <p className="p-3  fs-4">
                <span className="text-primary"/> {greeting.mensaje}       
            </p> 
        </div>
    )

} 
export default ItemListContainer;
