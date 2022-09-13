import React from "react";
//import ItemCount from "./ItemCount";
const Item = (item) => {
    return(
        <div className="card mx-auto mb-3" style={{width: 300}}>
                <img src={item.thumbnail} className="card-img-top p-2" alt={item.title}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p>Precio: ${item.price}</p>
                    
                                        
                </div>    
        </div>
    )

} 
export default Item;