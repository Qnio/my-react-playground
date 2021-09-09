import React from "react";
import ListItems from "../ListItems/ListItems";
import {Item} from "../../../model/item";
import {Table} from "react-bootstrap";

const ViewItems: React.FC<{ items: Item[] }> = (props) => {

    if (props.items.length === 0) {
        return <h5>There is no items.</h5>
    }

    return (
        // <ul className="item-card">
        //     {props.items.map((item: Item) => <ListItems item={item} key={item.id}/>)}
        // </ul>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Item Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Added</th>
            </tr>
            </thead>
            <tbody>
            {
                props.items.map((item: Item) => <ListItems item={item} key={item.id}/>)
            }
            </tbody>
        </Table>
    )
}

export default ViewItems;
