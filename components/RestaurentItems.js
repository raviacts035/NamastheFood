import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useFetchData from "../Hooks/useFetchData";
import { Restro_Items_URL } from "../utils/helper";
import ItemGroup from "./ItemGroup";


const RestaurentItems = () => {
  const { id } = useParams();

  const Info = useFetchData(Restro_Items_URL + id);
  
  //Restro main banner Info, Part-1
  const restroInfo = Info?.data?.cards[0]?.card?.card;
  //Restro Grouped Card Collection, Part-2
  const ItemsGroups =
    Info?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return !restroInfo ? (
    <Shimmer />
  ) : (
    <>
      <section className="flex flex-col px-[100px] w-min mx-auto sm:w-[640px] lg:w-[860px] 2xl:w-[1080px]">
        {/* Restro Banner (Part-1) */}
        <div className="">
          <h2 className="text-xl font-bold py-2">{restroInfo?.info?.name}</h2>
          {/* Left Div */}
          <div className="">
            <p className="basis-1/3 text-[10px]">
              {restroInfo?.info.cuisines.join(", ")}
            </p>
            <p className="basis-1/3 text-[10px]">
              {restroInfo?.info.areaName}{" "}
              {restroInfo?.info.sla?.lastMileTravelString}
            </p>
          </div>
          {/* Right Div */}
          <div></div>
          <p className="flex gap-2 py-2 text-[10px]">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
              alt="bycikle"
            />
            {restroInfo?.info?.feeDetails?.message}
          </p>
          <hr className="my-2 border-1 w-full" />
            <div className="flex gap-2 text-sm font-bold">
                <div >{restroInfo?.info.sla?.slaString}</div>
                <div>{restroInfo?.info?.costForTwoMessage}</div>
            </div>
        </div>
        {/* ItemsGroups section */}
        <section>
          {ItemsGroups.map((e) => {
              if (e?.card?.card.title && e?.card?.card.itemCards) {
                return (<>
                    <hr className="my-2 border-2 border-black"/>
                    <ItemGroup par={e.card.card} />
                </>);
            }
          })}
        </section>
      </section>
    </>
  );
};

export default RestaurentItems;
