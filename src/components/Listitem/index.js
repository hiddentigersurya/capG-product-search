import React from "react";
import './index.css'

const Listitem = (props) =>{
    const {item}=props
    const {productId,name,price,category} =item;
    return (
        <tr >
            <td>{productId}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{category}</td>
        </tr>
    )
}

export default Listitem;