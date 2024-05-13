import useAuth from "../../Hook/useAuth";
import Swal from 'sweetalert2'
const AddServices = () => {
    const {user}=useAuth()
    
console.log(user)
    const handleAddItem =  event =>{
        event.preventDefault();
        
        const form= event.target;
        
        const service_image = form.image.value; 
        const service_name = form.service_name.value; 
        // const subcategory_name = form.subcategory_name.value; 
        const service_description= form.service_description.value; 
        const service_price= form.service_price.value; 
        // const rating = form.rating.value; 
        // const processing_time = form.processing_time.value; 
        // const stock_status = form.stock_status.value; 
        // const customization = form.customization.value; 
        // const user_email = form.user_email.value; 
        const service_area = form.service_area.value; 
        const provider_email =user.email;
        const provider_name =user.displayName;
        const provider_image =user.photoURL;
      
        
        const newItem = {service_image,service_name,service_description,service_price,service_area,provider_email,provider_name,provider_image}
        console.log(newItem);
        // send data to the server:->
        fetch(`${import.meta.env.VITE_API_URL}/services`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newItem)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
        } 

    
    return (
        <section className="p-6 mx-28 rounded-xl dark:bg-gray-100 dark:text-gray-900 bg-indigo-100"  style={{ backgroundImage: 'url(https://i.ibb.co/Yb2Xkkc/9743528.png)' }}>
        <div><h1 className="mt-6 mb-5 mx-auto w-[19%] font-bold text-4xl ">Add Service</h1>
<hr  className="bg-black w-[29%] mx-auto "/></div>   
           {/* <Helmet><title>Art & Crft | add items</title></Helmet> */}
       <form onSubmit={handleAddItem} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
           <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
               {/* <!-- Personal Information --> */}
               <div className="space-y-2 col-span-full lg:col-span-1">
                   
               </div>
               <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                   {/* <!-- Image URL --> */}
                   <div className="col-span-full">
                       <label htmlFor="image" className="text-sm">Image URL</label>
                       <input id="image" type="url" name="image" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required/>
                   </div>
                   {/* <!-- service Name --> */}
                   <div className="col-span-full">
                       <label htmlFor="service_name" className="text-sm">Service Name</label>
                       <input id="service_name" type="text" name="service_name" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"required />
                   </div>
                   {/* <!-- Subcategory Name --> */}
                  
                   {/* <!-- Short Description --> */}
                   <div className="col-span-full">
                       <label htmlFor="service_description" className="text-sm">Short Description</label>
                       <textarea id="service_description" name="service_description" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required></textarea>
                   </div>
                   {/* <!-- service_price --> */}
                   <div className="col-span-full">
                       <label htmlFor="service_price" className="text-sm">Price</label>
                       <input id="service_price" type="number" name="service_price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                   </div>
                   {/* <!-- Rating --> */}
                 
                   {/* <!-- Customization --> */}
                 
                   {/* <!-- Processing Time --> */}
                
                   {/* <!-- Stock Status --> */}
                   {/* <div className="col-span-full">
                       <label htmlFor="stock_status" className="text-sm">Stock Status</label>
                       <select id="stock_status" name="stock_status" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                           <option value="in_stock">In Stock</option>
                           <option value="made_to_order">Made to Order</option>
                       </select>
                   </div> */}
                   {/* <!-- User Email --> */}
                   {/* <div className="col-span-full">
                       <label htmlFor="user_email" className="text-sm">User Email</label>
                       <input id="user_email" type="email" name="user_email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                   </div> */}
                   {/* <!-- User Name --> */}
                   <div className="col-span-full">
                       <label htmlFor="service_area" className="text-sm">Service area</label>
                       <input id="service_area" type="text" name="service_area" placeholder="service_area" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                   </div>
                   {/* <!-- Add Button --> */}
                   <div className="col-span-full">
                       <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Add</button>
                   </div>
               </div>
           </div>
       </form>
   </section>
    );
};

export default AddServices;