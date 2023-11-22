import './ShoppingList.css'
import Item from '../Item/Item.jsx'

function ShoppingList({items, clearItems, getItems}){

    return(
        <section className="shopping-list">
            <h2>Shopping List</h2>
            <button className="reset-btn">Reset</button>
            <button className="clear-btn" onClick={clearItems}>Clear</button>
            <div>
                {items.map((item) => (
                    <Item key={item.id} item={item} getItems={getItems}/>
                ))}
            </div>
        </section>
    )
}

export default ShoppingList;