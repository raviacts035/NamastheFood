const ItemCard=({name,price,id,imageId,description})=>{
    return (
        <div className="" key={id}>
            <div>
            {imageId?<img alt="Item Image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId} />:''}
            </div>
            <h2>{name}</h2>
            <p>{price/100} rs</p>
            <p>{description?description:""}</p>
        </div>
    )
}

export default ItemCard