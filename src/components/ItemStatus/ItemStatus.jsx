function ItemStatus({item, buyItem}){
    if(item.isPurchased){
        return(
            <p>Purchased</p>
        );
    } else {
        return(
            <>
            <button onClick={buyItem}>Buy</button><button>Remove</button>
            </>
        );
    }
}

export default ItemStatus;