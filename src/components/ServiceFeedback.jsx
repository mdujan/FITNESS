import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";


const ServiceFeedback = () => {
    const {user}=useAuth()
    const handleAddItem =  event =>{
        event.preventDefault();
        
        const form= event.target;
        
        
        const service_name = form.service_name.value; 
      
        const feedback = form.feedback.value; 
        const provider_email =user.email;
        // const provider_name =user.displayName;
        // const provider_image =user.photoURL;
      
        
        const newItem = {service_name,provider_email,feedback}
        console.log(newItem);
        // send data to the server:->
        fetch(`${import.meta.env.VITE_API_URL}/feedback`,{
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
                    title: 'Posted!',
                    text: 'Post added successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
        } 


    return (
        <section className="p-6 mx-28 rounded-xl dark:bg-gray-100 dark:text-gray-900 bg-indigo-100"  style={{ backgroundImage: 'url(https://i.ibb.co/Yb2Xkkc/9743528.png)' }}>
        <div><h1 className="mt-6 mb-5 mx-auto w-[19%] font-bold text-4xl ">Service Feedback</h1>
<hr  className="bg-black w-[29%] mx-auto "/></div>   
           {/* <Helmet><title>Art & Crft | add items</title></Helmet> */}
       <form onSubmit={handleAddItem} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
           <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
               {/* <!-- Personal Information --> */}
               <div className="space-y-2 col-span-full lg:col-span-1">
                   
               </div>
               <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                
                   {/* <!-- service Name --> */}
                   <div className="col-span-full">
                       <label htmlFor="service_name" className="text-sm">Service Name</label>
                       <input id="service_name" type="text" name="service_name" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"required />
                   </div>
                  
                  
                   {/* <!-- feedback --> */}
                   <div className="col-span-full">
                       <label htmlFor="feedback" className="text-sm">Please share your feedback about taking service</label>
                       <input id="feedback" type="text" name="feedback" placeholder="feedback" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                   </div>
                   {/* <!-- Add Button --> */}
                   <div className="col-span-full">
                       <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Post Feedback</button>
                   </div>
               </div>
           </div>
       </form>
   </section>
    );
};

export default ServiceFeedback;