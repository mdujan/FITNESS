import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import useAuth from "../Hook/useAuth";
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Update = () => {
    const {user} = useAuth() || {};
    const {id}=useParams();
    console.log(id);
    const[update, setUpdate]=useState({});

    useEffect (()=>{
        fetch(`${import.meta.env.VITE_API_URL}/singleItem/${id}`)
        .then(res =>res.json())
        .then(data =>{
            setUpdate(data)
            console.log(data);
        })
},[id])

const handleUpdate =(event)=>{
    event.preventDefault();
    const form= event.target;

    const service_image = form.service_image.value;
const service_name = form.service_name.value; 
// const subcategory_name = form.subcategory_name.value; 
const service_description= form.service_description.value; 
const service_price= form.service_price.value; 
// const rating = form.rating.value; 
// const processing_time = form.processing_time.value; 
// const stock_status = form.stock_status.value; 
// const customization = form.customization.value; 
// const user_email = form.user_email.value; 
// const user_name = form.user_name.value; 
const service_area = form.service_area.value; 
const provider_email =user.email;
const provider_name =user.displayName;
const provider_image =user.photoURL;

const info = {service_image,service_name,service_description,service_price,service_area,provider_email,provider_name,provider_image};

    fetch(`${import.meta.env.VITE_API_URL}/updateItem/${id}`,{
    method:'PUT',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(info)
})
.then(res => res.json())
.then(data => {
    
    if( data.modifiedCount> 0){
        Swal.fire({
            title: 'UPDATE !',
            text: 'Successfully Updated',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          
        // console.log(data);
        // toast.success('updated')
    }
})
// console.log(newItem);
}


    return (
        <section className="p-6 mx-28 rounded-xl dark:bg-gray-100 dark:text-gray-900 bg-purple-300">
        <form onSubmit={handleUpdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
        <Helmet><title>Fitness | update</title></Helmet>
            <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                {/* <!-- Personal Information --> */}
                <div className="space-y-2 font-bold col-span-full lg:col-span-1">
                    <h2 className="bg-amber-500 rounded-2xl  ml-32 text-center">UPDATE</h2>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    {/* <!-- Image URL --> */}
                    <div className="col-span-full">
                        <label htmlFor="service_image" className="text-sm">Image URL</label>
                        <input defaultValue={update.service_image} id="service_image" type="url" name="service_image" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- service Name --> */}
                    <div className="col-span-full">
                        <label htmlFor="service_name" className="text-sm">Item Name</label>
                        <input defaultValue={update.service_name} id="service_name" type="text" name="item_name" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    
                    {/* <!-- Short Description --> */}
                    <div className="col-span-full">
                        <label htmlFor="service_description" className="text-sm">Short Description</label>
                        <textarea defaultValue={update.service_description} id="service_description" name="short_description" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                    </div>
                    {/* <!-- Price --> */}
                    <div className="col-span-full">
                        <label htmlFor="service_price" className="text-sm">Price</label>
                        <input defaultValue={update.service_price} id="service_price" type="number" name="price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                  
                    {/* <!-- Processing Time --> */}
                    {/* <div className="col-span-full">
                        <label htmlFor="processing_time" className="text-sm">Processing Time</label>
                        <input defaultValue={update.processing_time} id="processing_time" type="text" name="processing_time" placeholder="Processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div> */}
                   
                    {/* <!-- User Email --> */}
                    {/* <div className="col-span-full">
                        <label htmlFor="user_email" className="text-sm">User Email</label>
                        <input defaultValue={update.email} id="user_email" type="email" name="user_email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div> */}
                    {/* <!-- User Name --> */}
                    <div className="col-span-full">
                        <label htmlFor="service_area" className="text-sm">User Name</label>
                        <input defaultValue={update.service_area} id="service_area" type="text" name="service_area" placeholder="service_area" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Add Button --> */}
                    <div className="col-span-full">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
                    </div>
                </div>
            </div>
        </form>
    </section>
    );
};

export default Update;