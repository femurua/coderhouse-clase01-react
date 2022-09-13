import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.map(item => 
                <Item item={item} />)}
        </div>
    )

} 
export default ItemList;