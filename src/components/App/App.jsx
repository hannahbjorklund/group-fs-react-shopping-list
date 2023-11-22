import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ItemForm from '../ItemForm/ItemForm.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import './App.css';


function App() {
    let [itemArray, setItemArray] = useState([]);

    useEffect(() => {getItems()}, [])
    
    const getItems = () => {
      axios({
        method: 'GET',
        url: '/items'
      }).then((response) => {
        console.log(response.data);
        setItemArray(response.data);
      }).catch((error) => {
        console.log("Error in GET route:", error);
      })
    }

    const clearItems = () => {
      axios({
        method: 'DELETE',
        url: '/items',
        data: 'clearAll'
      }).then((response) => {
        console.log("Got a DELETE request at /items to CLEAR ALL");
        getItems();
      }).catch((error) => {
        console.log("ERROR clearing list:", error);
      })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm getItems={getItems}/>
                <ShoppingList items={itemArray} clearItems={clearItems} getItems={getItems}/>
            </main>
        </div>
    );
}

export default App;
