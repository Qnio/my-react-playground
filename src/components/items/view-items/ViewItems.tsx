import React from "react";
import ListItems from "../ListItems/ListItems";
import {Item} from "../../../model/item";

const ViewItems: React.FC<{ items: Item[] }> = (props) => {

    if(props.items.length === 0) {
        return <h5>There is no items.</h5>
    }

    return (
        <ul className="item-card">
            {props.items.map((item: Item) => <ListItems item={item} key={item.id}/>)}
        </ul>
    )
}

export default ViewItems;
