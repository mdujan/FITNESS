import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import axios from 'axios'
import { toast } from "react-toastify";
const BookRequest = () => {
 const {user} =useAuth() || {};

 const [bookings , setbookings] = useState([])
 useEffect (() => {
    getData()
 },[user] )

const getData = async () => {
        const{data} = await axios(
            `${import.meta.env.VITE_API_URL}/bookRequests/${user?.email}`
        )
        setbookings(data)
}
// console.log(bookings)

// handlesatus:
const handleStatus = (value,id) =>{
    const status = value
    console.log(status)    
    axios.patch(`${import.meta.env.VITE_API_URL}/status/${id}?status=${status}` )
                .then(res=>{
                    console.log(res.data)
                    toast.success()
                })
}
 

    return (
        <div className="" >
        {
          bookings?.length?
            <div className="">
              {/* <Helmet><title>Art & Crft | my list</title></Helmet> */}
              <div className="w-[35%] mx-auto mb-14 mt-6"><h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 ">My Service <span className="text-yellow-500 font-semibold">(panding purchase)</span></h2></div>
              <div>
                <hr className="w-[30%] mx-auto mb-9" />
  
  
                {/* <Player className="absolute top-24 left-24 "
              autoplay
              loop
              src="https://lottie.host/58d64278-d278-43ae-974e-715d6a2d94ce/Z49brFnRqv.json"
              style={{ height: '70px', width: '90px' }}
            >
              
            </Player> */}
              </div >
  
  
  
              <div className="w-[100%] mx-auto relative" >
                <div >
                  {/* <Player className="absolute -top-36 right-36"
              autoplay
              loop
              src="https://lottie.host/3eb1cec0-029c-4994-8792-dd978050d107/vgQV7BLArS.json"
              style={{ height: '100px', width: '100px' }}
            >
              
            </Player> */}
                </div>
  
  
  
  
                {/* {
                    bookings?  */}
                {
                  bookings?.map(item => <div key={item._id} item={item} >  
                  {/* START TABLE:--> */}
                  <div  style={{ backgroundImage: 'url(https://i.ibb.co/nnHyJ0F/5570863.jpg)' }}  className="mb-6 bg-cover bg-repeat-x  border-teal-600 border rounded-xl container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4  text-2xl text-teal-600 font-semibold leading-tight">Booking pandings service :</h2>
      <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
              <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-36 "  />
              </colgroup>
              <thead className="dark:bg-gray-300">
                  <tr className="text-left">
                  <th className="p-3 text-bold text-lg ">Service Name</th>
                      <th className="p-3 text-lg text-bold">Service Image</th>
                      <th className="p-3 text-lg  text-bold">Date</th>
                      <th className="p-3 text-bold text-lg ">Address</th>
                      <th className="p-3 text-bold text-lg  text-right">Price</th>
                      <th className="p-3 text-bold text-lg ">Status</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="border-b  border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                          <p>{item.service_name}</p>
                      </td>
                      <td className="p-">
                          <p><img className="w-48 h-24 rounded-lg bg-cover" src={item.service_image} alt="" /></p>
                      </td>
                      <td className="p-3">
                          <p>{new Date(item.booking_date).toLocaleDateString()}</p>
                  
                      </td>
                      <td className="p-3">
                          <p>{item.address}</p>
                         
                      </td>
                      <td className="p-3 text-right">
                          <p>{item.price}</p>
                      </td>
                      <td   className="p-3 text-right ">
                          <span className="bg-yellow-300 px-3 p-2 shadow-inner shadow-zinc-700  font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                              {/* <span></span> */}
                              <select onChange={(e)=>handleStatus(e.target.value,item._id)} id="service_status" name="service_status" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                            <option value="panding">{item.service_status}</option>
                <option value="working">working</option>
                

                            <option value="complete">complete</option>
                        </select>
                          </span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
                  
                  </div>)
  
                }
                {/* : <h1>NOTHING FIND</h1>
    
                 }  */}
  
  
  
  
  
              </div>
  
            </div>
            :
            <div className="mx-auto mt-20 ">
              <h1 className="text-2xl font-bold text-orange-800 mx-auto w-[20%] mt-10">NO panding request!</h1>
              <img className="mx-auto w-[40%] h-[40%]" src={'https://i.ibb.co/wBwQ4W1/6922095.jpg'} alt="" /></div>
        }
      </div>
    );
};

export default BookRequest;