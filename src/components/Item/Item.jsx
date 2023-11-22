import './Item.css';
import axios from 'axios';
import ItemStatus from '../ItemStatus/ItemStatus.jsx';

function Item({item, getItems}){

    const buyItem = () => {
        axios({
            method: 'PUT',
            url: `/items/${item.id}`
        }).then((response) => {
            console.log("Received a PUT request");
            getItems();
        }).catch((error) => {
            console.log("Error in PUT:", error);
        })
    }

    return(
        <div className="item">
            <div className="item-info">
                <p>{item.name}</p>
                <p>{item.quantity} {item.unit}</p>
                <ItemStatus item={item} buyItem={buyItem}/>
            </div>
        </div>
    );
}

export default Item;