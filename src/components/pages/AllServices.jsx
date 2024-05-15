// import { useLoaderData } from "react-router-dom";
import EveryItem from "../EveryItem";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Helmet } from "react-helmet";

const AllServices = () => {
    // const items = useLoaderData();
// searching state:-> 
const[search, setSearch]= useState('')


const [items,setItems]=useState([])
useEffect(()=>{
        const getData =async () =>{
            const  {data} = await axios(`${import.meta.env.VITE_API_URL}/services`)
            setItems(data)
        }
        getData()
},[])



const handleSearch= e =>{
    e.preventDefault()
    const text = e.target.search.value
    const getData =async () =>{
                  const  {data} = await axios(`${import.meta.env.VITE_API_URL}/search?search=${text}`)
                  setItems(data)
              }
              getData()
    setSearch(text)
}

console.log(search);

    return (
        <div>
        <form onSubmit={handleSearch} className="my-10 w-[23%] bg-slate-200 mx-auto " >
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter service Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 bg-purple-800 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
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