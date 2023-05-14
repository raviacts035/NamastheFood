const ItemCard=({name,price,id,imageId,description})=>{
    return (
        <div className="p-2 flex justify-between" key={id}>
            <div className="gap-2">
                <h2 className="font-bold text-[13px]">{name}</h2>
                <p className="text-[13px] text-slate-950">₹ {price/100}</p>
                <p className="py-2 text-[10px] text-slate-400">{description?description:<></>}</p>
            </div>
            <div className="h-fit border-1 rounded-lg border-black">
                {imageId?<img alt="Item Image" className="h-[100px] w-[100px] rounded-lg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId} />:''}
            </div>
        </div>
    )
}

export default ItemCard