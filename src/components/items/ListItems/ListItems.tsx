import React from 'react';
import './ListItems.scss';
import {Item} from "../../../model/item";

const ListItems: React.FC<{ item: Item }> = (props) => {
    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.itemName}</td>
            <td>{props.item.itemDesc}</td>
            <td>{props.item.itemPrice}</td>
            <td>{props.item.date}</td>
        </tr>
    )
}

export default ListItems;
