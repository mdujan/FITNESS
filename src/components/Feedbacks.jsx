import { useEffect, useState } from "react";
import axios from 'axios'

const Feedbacks = () => {
    
 const [feedbacks , setFeedback] = useState([])
 useEffect(() => {
    getData()
 },[] )

const getData = async () => {
        const{data} = await axios(
            `${import.meta.env.VITE_API_URL}/feedback`
        )
        setFeedback(data)
}


    return (
        <div className="" >
          <div className="w-[30%] mx-auto mb-14 mt-14"><h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 ">Customers <span className="text-yellow-500 font-semibold"> Feedback</span></h2></div>
        {
          feedbacks?.length?
            <div className="">
             
              
              <div>
                <hr className="w-[40%] mx-auto mb-9" />
  
  
                {/* <Player className="absolute top-24 left-24 "
              autoplay
              loop
              src="https://lottie.host/58d64278-d278-43ae-974e-715d6a2d94ce/Z49brFnRqv.json"
              style={{ height: '70px', width: '90px' }}
            >
              
            </Player> */}
              </div >
  
  
  
              <div className="w-[70%] mx-auto relative" >
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
                    feedbacks?  */}
                {
                  feedbacks?.map(item => <div key={item._id} item={item} >  
                  {/* START TABLE:--> */}
                  <div  style={{ backgroundImage: 'url(https://i.ibb.co/nnHyJ0F/5570863.jpg)' }}  className="mb-6 bg-cover bg-repeat-x  border-teal-600 border rounded-xl container p-2 mx-auto sm:p-4 dark:text-gray-800">
      {/* <h2 className="mb-4  text-2xl text-purple-700 font-semibold leading-tight">Customers feedback about services :</h2> */}
      <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
              <colgroup>
                  <col />
                  <col />
                
                  <col className=" "  />
              </colgroup>
              <thead className="dark:bg-gray-300">
                  <tr className="text-left">
                  <th className="p-1 text-bold text-lg ">Service Name</th>
                     
                      <th className="p-1 text-lg text-purple-600  text-bold">FEEDBACK (opinion)</th>
             
                      <th className="p-1 text-bold text-lg ml-4 ">customer email</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="border-b  border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                          <p>{item.service_name}</p>
                      </td>
                  <td className="p-3  text-amber-800">
                          <p>{item.feedback}</p>
                      </td>
                     
                    
                     
                   
                     
                      <td className="p-3 ml-6">
                          <p>{item.provider_email}</p>
                         
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
              <h1 className="text-2xl font-bold text-orange-800 mx-auto w-[20%] mt-10">customers feedback not posted yet </h1>
              <img className="mx-auto w-[16%] h-[16%]" src={'https://i.ibb.co/wBwQ4W1/6922095.jpg'} alt="" /></div>
        }
      </div>
    );
};

export default Feedbacks;
