import React from 'react';
import './ListItems.scss';
import {Item} from "../../../model/item";

const ListItems: React.FC<{ item: Item }> = (props) => {
    return (
        <li>
            <h5>{props.item.itemName}</h5>
            <p>{props.item.itemDesc}</p>
            <p>{props.item.itemPrice}</p>
            <p>{props.item.date}</p>
        </li>
    )
}

export default ListItems;
