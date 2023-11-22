import {useState, useEffect} from 'react';
import axios from 'axios';
import './ItemForm.css'

function ItemForm({getItems}){
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState(0);
    let [itemUnit, setItemUnit] = useState('');

    const addItem = (evt) => {
        evt.preventDefault();
        let item = {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        };
        axios({
            method: 'POST',
            url: '/items',
            data: item
        }).then((response) => {
            console.log("POSTed a new item");
            // Clear form inputs
            setItemName('');
            setItemQuantity(0);
            setItemUnit('');
            // Re get the items to update the display
            getItems();
        }).catch((error) => {
            console.log("Oh no the POST didn't work:", error);
        })
    }

    return(
        <>
            <h2>Add an Item</h2>
            <form onSubmit={addItem}> 
                <label> Item: </label>
                <input
                type="text"
                value={itemName}
                onChange={(evt) => setItemName(evt.target.value)}
                />
                <label> Quantity: </label>
                <input
                type="number"
                value={itemQuantity}
                onChange={(evt) => setItemQuantity(evt.target.value)}
                />
                <label> Unit: </label>
                <input 
                type="text"
                value={itemUnit}
                onChange={(evt) => setItemUnit(evt.target.value)}
                />
                <button className="save-btn"> Save </button>
            </form>
        </>
    )
}

export default ItemForm;