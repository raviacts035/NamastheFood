import ItemCard from "./Itemcard"

const ItemGroup=(par)=>{
    // console.log(par.par)
    return (
        <section key={par.par.title}>
            <h3><b>{par.par.title}</b></h3>
            <hr></hr>
            {par.par.itemCards.map((r)=>{
            return <ItemCard {...r?.card?.info}/>
        })}
        </section>
    )
}

export default ItemGroup