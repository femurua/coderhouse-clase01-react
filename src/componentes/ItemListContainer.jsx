import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";

const ItemListContainer = (greeting) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(
            'https://api.mercadolibre.com/sites/MLA/search?q=azulejos&limit=12'
          )
            .then((respuesta) => respuesta.json())
            .then((data) => {
              console.log(data.results);
              setItems(data.results);
            });
    }, []);
    return(
        <div className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto">
           <h1 className="p-3 fs-2 border-top border-3">{greeting.titulo}</h1>
            <p className="p-3  fs-4">
                <span className="text-primary"/> {greeting.mensaje}       
            </p>
            <ItemList items={items}/>
        </div>
    )

} 
export default ItemListContainer;
