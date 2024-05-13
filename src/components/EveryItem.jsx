import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const EveryItem = ({item}) => {
    const {service_image, provider_image, service_description, service_price, provider_name, service_name, _id}=item;
    return (
        <div className="relative w-[60%] mx-auto h-[30%] m-10 shadow-xl rounded-2xl shadow-amber-300 ">
        <div className="card card-side bg-base-100 shadow-xl">
<figure><img className="w-[100%] mr-4 " src={service_image} alt="Movie"/></figure>
<div className="card-body">
<h2 className="card-title  text-3xl font-bold text-purple-950">{service_name}</h2>
<p className="text-xl font-semibold text-yellow-700 p-3"><span className="text-lg text-gray-950 font-bold">Name :</span>  {provider_name}</p>
<img src={provider_image} alt="" className="object-cover object-center ml-4 lg:w-20 h-20 w-7 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />

<div className="p-2 left-0 top-0 absolute bg-blue-100 rounded-br-2xl   text-amber-400 pr-3 font-bold"><span className="text-zinc-400 p-3  font-bold">PRICE : </span> {service_price}</div>
<Player
autoplay
loop
src="https://lottie.host/7f3c9dc8-6e1e-4bee-bd10-bd0a16cff8de/8xrThp8m0C.json"
style={{ height: '80px', width: '100px' }}
>

</Player>
<div className="card-actions">
 
  <Link to={`/details/${_id}`} className="btn text-yellow-700 mr-10 shadow-inner shadow-teal-500 border-amber-100  text-xl">View Details</Link>
</div>
</div>
</div>
    </div>
    );
};

export default EveryItem; 