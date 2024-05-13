import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";

const Details = () => {
    const [startDate, setStartDate] = useState(new Date());
    const services = useLoaderData();
    const { service_image, providers_image, service_description, service_price, providers_name, service_name } = services;
    console.log(services)
    const {user}=useAuth()

// purchase---> 
const handlePurchase =  event =>{
    event.preventDefault();
    
    const form= event.target;
    
    const service_image = form.service_image.value;
    const service_name = form.service_name.value; 
    // const subcategory_name = form.subcategory_name.value; 
    // const short_description= short_description; 
    const price= form.price.value; 
    const service_plan = form.service_plan.value; 
    // const processing_time = form.processing_time.value; 
    // const stock_status = form.stock_status.value; 
    const address = form.address.value; 
    const service_status = form.service_status.value; 
   const booking_date = startDate;
     
    const user_email =user.email;
    const user_name =user.displayName;
    const user_image =user.photoURL;
    
    const booking = {service_image ,service_name,price,service_status,booking_date,address,service_plan,user_email,user_name,user_image,}
    console.log(booking);
    // send data to the server:->
    fetch(`${import.meta.env.VITE_API_URL}/book`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Purchase!',
                text: 'Purchase successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
    })
    } 




    return (
        <div>
            <h1 className="mt-10 mb-6 mx-auto w-[19%] font-bold text-4xl ">Service Dteails</h1>
            <hr className="bg-black w-[29%] mx-auto " />
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="w-[100%] mt-1 mx-auto ">
                    <div className=" card lg:card-side shadow-xl bg-stone-300 m-14  ">
                        <div className="rounded-xl p-7 bg-gray-100 mr-8 w-full  m-1 shadow-purple-400  shadow-2xl">  <img className="rounded-sm h-full w-full" src={service_image}  alt="Album" />
                        </div>


                        <div className="card-body w-[100%] mt-3" >
                            <h2 className="card-title text-3xl font-extrabold">{service_name}</h2>
                            <p className="dark:text-gray-800 lg:text-lg text-xl font-bold text-slate-500 mt-2 flex-grow-0 ">Location :  <span className="text-purple-500" >{ }</span></p>
                            <hr />
                            <p className="flex-grow-0  text-2xl py-2 font-bold text-amber-600 ">{ }</p>
                            <hr />

                            <p className="text-lg"><span className="font-bold mt-0 mr-3">Description : </span><span className="text-stone-600 ">{service_description}</span></p>

                            <p className="py-1 mt- "><span className="font-extrabold text-center text-xl w-[4%]  mx-auto text-amber-600">Provider Info :-</span>
                            </p>


                            <img src={providers_image} alt="" className="ml-64 object-cover object-center lg:w-20 h-20 w-7 h-7 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                            <span className="mx-2 text-center bg-slate-100 p-2 rounded-full text-purple-500   font-semibold  "><span className="text-stone-500 font-bold">Providers Name : </span>{providers_name}</span>

                            <span className="mx-2 text-center bg-purple-200 p-2 rounded-full text-purple-500   font-semibold  ">{ }</span>
                            <hr />
                            <ul className="p-2 ">
                                {/* <li className="mb-2"><span className="text-gray-500 font-semibold"></span> <span className="pl-[10%] font-extrabold"></span> </li> */}
                                {/* <li className="mb-2  "><span className="text-gray-500 font-semibold">Rating :</span> <span className="pl-[10%] font-extrabold">{}</span> </li>
                <li className="mb-2 mt-3"><span className="text-gray-500 font-semibold">Procerssing time :</span> <span className="pl-[1%] font-extrabold">{}</span> </li> */}

                                <li className="mb-2 mt-5"><span className="text-gray-500 font-bold text-xl">Price :</span> <span className="px-[9%] ml-10 text-xl   bg-zinc-700 rounded-md p-3 mt-4 text-amber-400 font-extrabold">{service_price}</span> </li>


                            </ul>
                            <div className="mb-6  justify-end">
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="bg-purple-500 text-white text-lg ml-96 mt-4 btn  shadow-2xl shadow-purple-600" onClick={() => document.getElementById('my_modal_4').showModal()}>Add Book</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-full max-w-5xl ">
                                        <div className="mx-auto rounded-xl p-7 bg-gray-100  m-1 shadow-purple-400  shadow-2xl h-72 w-72">
                                            <h1 className=" card-title mx-auto lg:text-lg  font-semibold">{service_name}</h1>
                                            <img className="pb-1  rounded-sm h-full w-full" src={service_image} alt="Album" />

                                        </div>
                                        <div className="mx-auto text-center">
                                            <h2 className="mx-auto  text-2xl text-teal-800 fot-bold"> Provider Name : {providers_name}</h2>
                                        </div>
                                        <form onSubmit={handlePurchase}  method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button  className="btn btn-sm btn-circle w-[20%] h-[7%] bg-red-300 text-white text-base absolute right-2 top-2">Press Esc to Exit</button>

                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Address</label>

                                                <input type="text" name="address" placeholder="address" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Service Plan</label>

                                                <input type="text" name="service_plan" placeholder="plan" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-700 font-bold dark:text-gray-300">Service Taking date</label>
                                                <DatePicker className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" selected={startDate} onChange={(date) => setStartDate(date)} />


                                            </div>

                                            <div className="col-span-full my-2 border shadow-sm shadow-indigo-500 p-2">
                                                <label htmlFor="service_status" className="text-sm font-bold border-b-2 ">Service Status</label>
                                                <select id="service_status border-2 border-black " name="service_status" className=" w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                                                    <option className=" text-emerald-600  " value="pending" selected>Pending</option>
                                                </select>
                                            </div>
                                            {/* <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Address</label>

                                                <input  disabled type="text" name="address" placeholder="address" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div> */}
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Service_image_Url</label>

                                                <input defaultValue={service_image} disabled type="text" name="service_image" placeholder="service_image" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Service Name</label>

                                                <input defaultValue={service_name}  disabled type="text" name="service_name" placeholder="service_name" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-500 dark:text-gray-300">Price</label>

                                                <input defaultValue={service_price} disabled type="text" name="price" placeholder="price" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                            </div>
<button className="my-3 btn btn-block bg-amber-700 p-2  text-white text-lg font-semibold">Purchase</button>
                                        </form>
                                       
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;