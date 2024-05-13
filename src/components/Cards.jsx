/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";


const Cards = ({ item }) => {
	const { service_image, provider_image, service_description, service_price, providers_name, service_name, _id } = item;
	return (

		<div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 w-full h-fit">
			<div className="flex items-center justify-between p-3">
				<div className="flex items-center space-x-2">
					<img src={provider_image} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
					<div className="-space-y-1">
						<h2 className="text-sm font-semibold leading-none text-amber-900" >{providers_name}</h2>

					</div>
				</div>

			</div>
			<img src={service_image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
			<div className="p-3">
				<div className="flex items-center justify-between">
					<div></div>
					<button type="button" title="Bookmark post" className="flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
							<path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
						</svg>
					</button>
				</div>
				<div>
					<h1 className="text-2xl font-bold text-teal-700">{service_name}</h1>
				</div>
				<div className="space-y-3 ">
					<p className="text-sm">
						<span className="text-xl font-semibold">Description : </span>{service_description}
					</p>
					<div >
						<span className="text-xl font-semibold text-zinc-900 "> price :</span> <span className="ml-1 text-xl font-semibold text-amber-500">{service_price}</span>
					</div>


				</div>
				<div>   <Link to={`/details/${_id}`} className=" btn btn-block bg-yellow-600 ">
					View Details
				</Link></div>
			</div>
		</div>
	);
};

export default Cards;