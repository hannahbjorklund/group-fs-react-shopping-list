import './Item.css';

function Item({item}){
    return(
        <div className="item">
            <div className="item-info">
                <p>{item.name}</p>
                <p>{item.quantity} {item.unit}</p>
                <button>Buy</button><button>Remove</button>
            </div>
        </div>
    );
}

export default Item;