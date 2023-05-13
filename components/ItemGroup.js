import ItemCard from "./Itemcard"

const ItemGroup=(par)=>{
    // console.log(par.par)
    return (
        <section key={par.par.title}>
            <h3><b>{par.par.title}</b></h3>
            {par.par.itemCards.map((r)=>{
            return <>
            <ItemCard {...r?.card?.info}/>
            <hr className="my-2 border-1 w-full"/>
            </>
        })}
        </section>
    )
}

export default ItemGroup