const ItemCard=({name,price,id,imageId,description})=>{
    return (
        <div className="flex justify-between" key={id}>
            <div>
                <h2>{name}</h2>
                <p>{price/100} rs</p>
                <p>{description?description:""}</p>
            </div>
            <div className="h-[100px] border-2 border-black">
                {imageId?<img alt="Item Image" className="h-full" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId} />:''}
            </div>
        </div>
    )
}

export default ItemCard