import './Item.css';

function Item({item}){

    const buyItem = (item) => {
        axios({
            method: 'PUT',
            url: `/items/${item.id}`
        }).then((response) => {
            console.log("Received a PUT request");

        })
    }

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