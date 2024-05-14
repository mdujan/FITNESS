import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Manage = () => {
  const { user } = useAuth() || {};
  const [myItems, setMyItem] = useState([]);
  const [control, setControl] = useState(false);
  console.log(myItems)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/manage/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyItem(data);
      });
  }, [user, control]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
              setControl(!control)
            }
          });

      }

    })
  }

  return (
    <div>
      {
        myItems?.length?
          <div className="">
            <Helmet><title>Fitness | Manage service</title></Helmet>
            <div className="w-[23%] mx-auto mb-14 mt-6"><h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 ">Manage My Service</h2></div>
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



            <div className="w-[50%] mx-auto relative" >
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
                  myItems?  */}
              {
                myItems?.map(item => <div item={item} key={item._id}>  <div className="-rotate-0  mb-20 card grid-cols-2 w-96 bg-base-100 shadow-xl">
                  <figure><img className="absolute rounded-r-2xl top-0 left-96 " src={item.service_image} alt="Shoes" /></figure>
                  <div className="card-body border-2 border-amber-400">
                    <h2 className="card-title ">
                      {item.service_name}
                      <div className="badge badge-secondary shadow-amber-300 shadow-2xl w-36 h-10 text-zinc-700 font-bold text-base ">Price :  <span className="ml-1 text-gray-200 font-bold">{item.service_price}</span></div>
                    </h2>
                    <p className="text-gray-600 font-medium"><span className="font-bold text-amber-700 text-lg">Description : </span>{item.service_description}</p>
                    <p className="text-gray-600 font-medium text-yellow-700 absolute -bottom-7 -left-10 -rotate-4 rounded-full bg-indigo-100 p-3 shadow-2xl shadow-amber-300" >{item.provider_email}</p>
                    <div className="card-actions justify-end">
                      {/* {item.price} */}
                      <div>


                      </div>
                      <Link to={`/update/${item._id}`}><button className="badge btn badge-outline shadow-inner shadow-blue-800 bg-amber-300 text-black font-semibold">Update</button> </Link>
                      <button onClick={() => handleDelete(item._id)} className="badge btn  badge-outline border-orange-600 shadow-inner shadow-red-800">Delete</button>
                    </div>
                  </div>
                </div> </div>)

              }
              {/* : <h1>NOTHING FIND</h1>
  
               }  */}





            </div>

          </div>
          :
          <div className="mx-auto mt-20 ">
            <h1 className="text-2xl font-bold text-orange-800 mx-auto w-[20%] mt-10">You, NO service added !</h1>
            <img className="mx-auto w-[40%] h-[40%]" src={'https://i.ibb.co/wBwQ4W1/6922095.jpg'} alt="" /></div>
      }
    </div>
  );
};

export default Manage;