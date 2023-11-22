import './ShoppingList.css'

function ShoppingList({items}){

    return(
        <section className="shopping-list">
            <h2>Shopping List</h2>
            <button className="reset-btn">Reset</button>
            <button className="clear-btn">Clear</button>
            <div>
                {/* This is where the items will go */}
            </div>
        </section>
    )
}

export default ShoppingList;