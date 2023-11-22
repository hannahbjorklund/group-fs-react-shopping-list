import {useState, useEffect} from 'react';
import './ItemForm.css'

function ItemForm(){
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState(0);
    let [itemUnit, setItemUnit] = useState('');

   

    return(
        <>
            <h2>Add an Item</h2>
            <form>
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
                <button> Save </button>
            </form>
        </>
    )
}

export default ItemForm;