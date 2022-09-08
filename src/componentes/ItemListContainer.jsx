import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import foto1 from "./img/material1.jpg";
import foto2 from "./img/material2.jpg";
import foto3 from "./img/material3.JPG";
import foto4 from "./img/material4.JPG";
import foto5 from "./img/material5.JPG";


const ItemListContainer = (greeting) => {
    const productos= [
        {   
            "id": "1m",
            "categoria": "material", 
            "nombre": "Azulejo", 
            "marca": "Azulejito", 
            "modelo": "color-01", 
            "precio": 200, 
            "cantidad": 3,
            "inicial" : 1,
            "onAdd" : 0, 
            "detalle": "Tamaño: 15x15cm Color: Aleatorio",
            "imagen": foto1
        },
        {
            "id": "2m",
            "categoria": "material",  
            "nombre": "Azulejo", 
            "marca": "Azulejito", 
            "modelo": "color-02", 
            "precio": 170, 
            "cantidad": 7,
            "inicial" : 1,
            "onAdd" : 0, 
            "detalle": "Tamaño: 15x15cm Color: celeste con escamas",
            "imagen": foto2
        },
        {
            "id": "3m", 
            "categoria": "material", 
            "nombre": "Azulejo", 
            "marca": "Azulejito", 
            "modelo": "color-03", 
            "precio": 170, 
            "cantidad": 10,
            "inicial" : 1,
            "onAdd" : 0, 
            "detalle": "Tamaño: 15x15cm Color: Verde con escamas",
            "imagen": foto3
        },
        {
            "id": "4m",
            "categoria": "material",  
            "nombre": "Azulejo", 
            "marca": "Azulejito", 
            "modelo": "color-04", 
            "precio": 170, 
            "cantidad": 1,
            "inicial" : 1,
            "onAdd" : 0, 
            "detalle": "Tamaño: 15x15cm Diseño: multicolor",
            "imagen": foto4
        },
        {
            "id": "5m", 
            "categoria": "material", 
            "nombre": "Azulejo", 
            "marca": "Azulejito", 
            "modelo": "color-05", 
            "precio": 170, 
            "cantidad": 8,
            "inicial" : 1,
            "onAdd" : 0, 
            "detalle": "Tamaño: 15x15cm Color: Azul salpicado",
            "imagen": foto5
        }
    ]
    const [items, setItems] = useState([]);
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItems(respuesta);
            console.log(respuesta);
        })
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
