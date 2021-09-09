import React, {useState} from "react";
import AddItem from "../items/AddItem/AddItem";
import ViewItems from "../items/view-items/ViewItems";
import Card from "../shared/card/Card";
import {Item} from "../../model/item";

import {Button, Container} from "react-bootstrap";

import './HomePage.scss';
import ItemsFilter from "../items/filter/ItemsFilter";
import ModalWrapper from "../shared/modal/ModalWrapper";


const DUMMY_DATA: Item[] = [
    {
        id: '1',
        itemName: 'Item nbr 1',
        itemDesc: 'This is item number 1',
        itemPrice: '23.99',
        date: '2020-01-04'
    },
    {
        id: '2',
        itemName: 'Item nbr 2',
        itemDesc: 'This is item number 2',
        itemPrice: '253.00',
        date: '2021-05-23'
    },
    {
        id: '3',
        itemName: 'Item nbr 3',
        itemDesc: 'This is item number 3',
        itemPrice: '145.99',
        date: '2019-01-04'
    },
    {
        id: '4',
        itemName: 'Item nbr 4',
        itemDesc: 'This is item number 4',
        itemPrice: '53.50',
        date: '2021-01-04'
    }
]

function HomePage() {

    const [items, addItem] = useState<Item[]>(DUMMY_DATA);
    const [year, setYear] = useState<string>('2021');
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const filteredItems = items.filter(item => new Date(item.date).getFullYear().toString() === year);

    const saveItemDataHandler = (enteredItemData: Item) => {
        const itemData = {
            ...enteredItemData,
            id: Math.random().toString()
        }

        addItem((prevState) => {
            return [...prevState, itemData]
        })
    }

    const updateYear = (chosenYear: string) => {
        setYear((nextValueYear) => {
            nextValueYear = chosenYear;
            return nextValueYear;
        });

    }

    const updateModal = () => {
        setShow(false)
    }

    return (
        <Container className="main-content">
            <ModalWrapper show={show} onCloseModal={updateModal}>
                <Card>
                    <AddItem onSaveItemData={saveItemDataHandler}/>
                </Card>
            </ModalWrapper>

            <Card>
                <div className='filter-items'>
                    <ItemsFilter selectedYear={year} onSelectedYear={updateYear}/>
                    <Button variant='dark' type='button' onClick={handleShow}>+ Add</Button>
                </div>
                <ViewItems items={filteredItems}/>
            </Card>

        </Container>
    )
}

export default HomePage;
