import React, {useRef, useState} from "react";
import {Item} from "../../../model/item";
import './AddItem.scss';


const AddItem: React.FC<{ onSaveItemData: (itemData: Item) => void }> = (props) => {
    const [itemName, setItemName] = useState<string>('');
    const [itemDesc, setItemDesc] = useState<string>('');
    const [itemPrice, setItemPrice] = useState<string>('');
    const [date, setDate] = useState<string>('');


    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const itemData: Item = {
            id: Math.random().toString(),
            itemName,
            itemDesc,
            itemPrice,
            date
        }

        props.onSaveItemData(itemData);

        //clearing the form
        setItemName('');
        setItemDesc('');
        setItemPrice('');
        setDate('');

    }

    function itemNameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setItemName(event.target.value);
    }

    function itemDescChangeHAndler(event: React.ChangeEvent<HTMLInputElement>) {
        setItemDesc(event.target.value)
    }

    function itemPriceChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setItemPrice(event.target.value)
    }

    function dateChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setDate(event.target.value)
    }

    return (

        <div>
            <h1>Add Item</h1>
            <hr/>
            <form onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="itemName">Item:</label>
                    <input type="text"
                           id="itemName"
                           className="form-control"
                           value={itemName}
                           onChange={itemNameChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="itemDesc">Description:</label>
                    <input type="text"
                           id="itemDesc"
                           className="form-control"
                           value={itemDesc}
                           onChange={itemDescChangeHAndler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="itemPrice">Price:</label>
                    <input type="number"
                           min="0.01"
                           step="0.01"
                           className="form-control"
                           value={itemPrice}
                           onChange={itemPriceChangeHandler}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date">Date:</label>
                    <input className="form-control"
                           type="date"
                           min="2019-01-01"
                           value={date}
                           onChange={dateChangeHandler}

                    />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>

    )
}

export default AddItem;
