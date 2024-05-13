import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import useAuth from "../../Hook/useAuth";
import image from '../../assets/2248.jpg';
import { IoMdArrowDropleft } from "react-icons/io";

const Navbar = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)

  }, [theme])

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dracula')
    } else {
      setTheme('light')
    }
  }

  const links1 = <>
    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><li>Home</li></NavLink>
    <NavLink to={'/services'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><li>Services</li></NavLink>
    {/* <NavLink to={'/add'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><li id='add'>Add Items</li></NavLink>

    <NavLink to={'/manage'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><ReactTooltip
      className='mr-14 p-2'
      anchorId="add"
      place="bottom"
      content="Add Items"
      effect="float"
      type="light"
    /><li>Manage Service</li></NavLink> */}
  </>
  const links2 = <>

    <NavLink to={'/add'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><li id='add'>Add Items</li></NavLink>

    <NavLink to={'/manage'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><ReactTooltip
      className='mr-14 p-2'
      anchorId="add"
      place="bottom"
      content="Add Items"
      effect="float"
      type="light"
    /><li>Manage Service</li></NavLink>
<NavLink to={'/myBook'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><li id='add'>My Booking</li></NavLink>
<NavLink to={'/bookRequests'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg shadow-2xl shadow-purple-500 " : "text-lg font-semibold hover:text-green-600 "}><li id='add'>Bookig Request</li></NavLink>

  </>
  const { logOut, user } = useAuth()
  return (
    <div className=" rounded-b-2xl  shadow-sky-400 w-full mx-auto ">
      <div className="navbar border bg-base-100 border-t-2 rounded-t-xl mt-3 h-[90px] bg-cover  "
        style={{ backgroundImage: 'url(https://i.ibb.co/dPTHg6y/navbar.jpg)' }}
      >

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {user ? <div className="">
                {links2}
              </div> : <div>{links1}</div>}
            </ul>
          </div >
          <img className="w-10 ml-2 h-10"  src={'https://i.ibb.co/BCV5nkk/stationary-bicycle-3643669.png'} alt="" />
         <Link to={'/'}><div className=" text-2xl font-bold text-stone-500  bg-cover">Fitness <span className=" text-2xl font-bold text-yellow-700 shadow-2xl shadow-purple-400 rounded-full "  >&</span> Therapeutic   </div></Link> 
         

        </div>
        {/* <img className="rounded-full top-2 ml-1  left-44 absolute w-[4%] h-[2%]" src="https://i.ibb.co/rbnwdPV/31530356-bird-2.jpg" alt="" /> */}
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {user ? <div className="flex space-x-14 text-xl font-bold ">
              <NavLink to={'/'} className={({ isActive }) => isActive ? "mr-24 text-green-600 font-bold text-lg   " : "mr-24 text-lg font-semibold hover:text-green-600 "}><li>Home</li></NavLink>
              <NavLink to={'/services'} className={({ isActive }) => isActive ? "text-green-600 font-bold text-lg ml-14 " : "ml-14 text-lg font-semibold hover:text-green-600 "}><li>Services</li></NavLink>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="  btn-circle ">
                  <div className="w-fit h-full rounded-full">
                    <span className="text-lg ml-32 pt-6 text-stone-700">Dashboard</span>
                  </div><span ><IoMdArrowDropleft className="ml-44  bg-amber-400 w-[80%] text-4xl mb-7 rounded-full" /> </span>
                </div>
                <ul tabIndex={0} className="bg-amber-200 menu menu-sm dropdown-content hover:tooltip-open z-[2] p-2 shadow  rounded-box   w-44">

                  {links2}
                </ul>
              </div>
            </div>

              :


              <div className="flex space-x-14 text-xl font-bold ">{links1}</div>}
          </ul>
        </div>
        <div className="navbar-end rounded-full mr-3">
          <div className="mx-3 ">
            <input onClick={handleToggle} type="checkbox" className="toggle theme-controller bg-gray-800 border-gray-300 [--tglbg:theme(colors.purple.200)] checked:bg-zinc-800 checked:border-zinc-700 checked:[--tglbg:theme(colors.purple.100)] row-start-1 col-start-1 col-span-2" />
          </div>
          {user ? <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="  btn-circle ">
              <div className="w-fit h-full rounded-full">
                {
                  user?.photoURL ? <img title={user?.displayName} className="w-full h-full rounded-full" alt="" src={user?.photoURL} /> : <img className=" w-18 rounded-full" src={image} alt="" />
                }
              </div><span ><RiArrowDropDownLine className="ml-3 text-xl" /> </span>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content hover:tooltip-open z-[2] p-2 shadow bg-base-100 rounded-box w-52">

              <li><a className="text-teal-500 font-semibold"> {user.email}</a></li>
              <li><a className="font-bold" onClick={logOut}>Logout</a></li>
            </ul>


          </div> :
            <div className="dropdown dropdown-end">
              <div className="">
                <div className="rounded-md w-[89px] bg-amber-600 text-white">
                  <Link to={'login'} id='login' className="btn btn-outline w-full text-white font-semibold ">Login</Link >
                  <ReactTooltip
                    className='mr-14 p-2'
                    anchorId="login"
                    place="bottom"
                    content="Login here"
                    effect="float"
                    type="light"
                  />

                </div>
              </div>

            </div>}


        </div>
      </div>
    </div>

  );
};

export default Navbar;