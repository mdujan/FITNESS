import { useLoaderData } from "react-router-dom";
import EveryItem from "../EveryItem";
// import { Helmet } from "react-helmet";

const AllServices = () => {
    const items = useLoaderData();
    console.log(items)
    return (
        <div>
          {/* <Helmet><title>Art & Crft | all items</title></Helmet> */}
          <h1 className="mx-auto w-[19%] text-3xl font-bold text-stone-700">All Services</h1>
          {
                    items.map(item=> <EveryItem 
                    key={item._id}
                    item={item}
                    ></EveryItem>)
                }
        </div>
    );
};

export default AllServices;