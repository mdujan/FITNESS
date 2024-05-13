import { Link, useLoaderData } from "react-router-dom";
import Cards from "../Cards";


const Home = () => {
    const items = useLoaderData();

    console.log(items)
    return (
        <div>
        <div className="lg:grid grid-cols-3 gap-6 col-span-1 mt-14">
           {
           items.slice(0,6).map(item => <Cards item={item} key={item._id} ></Cards>)
           
           }
        </div>
           <div className=" shadow-inner shadow-emerald-600 rounded-md  mx-auto w-[20%] mt-32  "><Link className="mx-auto w-[100%] btn bg-amber-500 text-stone-100" to={'/services'}>See All</Link></div>
           </div>
    );
};

export default Home;