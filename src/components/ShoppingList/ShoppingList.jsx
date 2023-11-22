import './ShoppingList.css'
import Item from '../Item/Item.jsx'

function ShoppingList({items}){

    return(
        <section className="shopping-list">
            <h2>Shopping List</h2>
            <button className="reset-btn">Reset</button>
            <button className="clear-btn">Clear</button>
            <div>
                {items.map((item) => (
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </section>
    )
}

export default ShoppingList;