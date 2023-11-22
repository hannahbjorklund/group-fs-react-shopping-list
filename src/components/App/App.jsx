import React from 'react';

import Header from '../Header/Header.jsx'
import ItemForm from '../ItemForm/ItemForm.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm />
            </main>
        </div>
    );
}

export default App;
