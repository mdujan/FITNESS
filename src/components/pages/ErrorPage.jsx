import { Link } from "react-router-dom";
import { PiKeyReturnBold } from "react-icons/pi";
const ErrorPage = () => {
    return (
        <div className="mx-auto">
            <Link className=" w-[30%] my-auto h-[30%] mx-auto" to={'/'}><button className=" bg-purple-200 rounded-l-full ml-96 w-[6%]  my-auto h-[10%] mx-auto"><PiKeyReturnBold className="text-5xl ml-10 font-bold" /> back</button></Link> 
        {/* <Helmet><title> Art & Craft | 404not Found</title></Helmet> */}
        <img className='h-[100%] w-[48%] mx-auto  ' src="https://i.ibb.co/VShQ9GM/6358473.jpg" alt="" />
        <h3>ERROR</h3>
    </div>
    );
};

export default ErrorPage;