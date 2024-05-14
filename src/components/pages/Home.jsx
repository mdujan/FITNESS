import { Link, useLoaderData } from "react-router-dom";
import Cards from "../Cards";
// import Sweper from "../Sweper";
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Marquee from "react-fast-marquee";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    const items = useLoaderData();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    console.log(items)
    return (
        <div className="mt-7">
      <Helmet><title> Fitness | Home</title></Helmet>
     <div className="mb-8">
     <Marquee speed={200} className="text-purple-500 bg-gray-100 border-spacing-3 shadow-2xl shadow-purple-500 p-3 font-bold text-base" pauseOnHover={true}> 
  <Link>Fitness & Therapeutic provides the best services including all types of health ans consultancies.     Todays offer in some services .     So grab that offer immidietly  </Link>


</Marquee>
     </div>
{/* sweeper slider:-->  */}
<>
<Swiper
            spaceBetween={1}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide><img className=' ' src={"https://i.ibb.co/dL9KyR8/28359-1.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /></SwiperSlide>
            <SwiperSlide><img className=' ' src={"https://i.ibb.co/Yd7zF6k/top-view-tailor-working-fabric.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /></SwiperSlide>
            <SwiperSlide><img className=' ' src={"https://i.ibb.co/f42V7h8/aditya-wardhana-2-Tnr1-FMHy2g-unsplash.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /></SwiperSlide>
            <SwiperSlide><img className='' src={"https://i.ibb.co/Yd7zF6k/top-view-tailor-working-fabric.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /></SwiperSlide>
            <SwiperSlide><img className=' ' src={"https://i.ibb.co/dL9KyR8/28359-1.jpg"} style={{ width: "100%", margin: "0% auto" }} alt=""
              data-aos-easing="ease-in-sine" /></SwiperSlide>

            <div className="autoplay-progress relative" slot="container-end">
              <svg className="absolute  top-0" viewBox="0 0 0 0" ref={progressCircle}>
                <circle cx="4" cy="4" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </>
        <div className="w-[23%] mx-auto  my-20"><h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 ">Popular Services</h2>
        <hr />
        </div>
           

        <div className="lg:grid grid-cols-3 gap-6 col-span-1 mt-14 mx-auto w-[90%]">
           {
           items.slice(0,6).map(item => <Cards item={item} key={item._id} ></Cards>)
           
           }
        </div>
           <div className=" shadow-inner shadow-emerald-600 rounded-md  mx-auto w-[20%] mt-32  "><Link className="mx-auto w-[100%] btn bg-amber-500 text-stone-100" to={'/services'}>See All</Link></div>




           {/* contact section:-->  */}
           <section className="py-6  dark:bg-gray-100 dark:text-gray-900 bg-cover mt-20 shadow-2xl shadow-inner shadow-amber-400 border-2" style={{ backgroundImage: 'url(https://i.ibb.co/dPTHg6y/navbar.jpg)' }}>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span>1807 Sk Mujib Road, Agrabad City</span>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>123456789</span>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>contact@business.com</span>
                  </p>
                </div>
              </div>
              <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <label className="block">
                  <span className="mb-1">Full name</span>
                  <input type="text" placeholder=" Login name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                </label>
                <label className="block">
                  <span className="mb-1">Email address</span>
                  <input type="email" placeholder=" login email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                </label>
                <label className="block">
                  <span className="mb-1">Message</span>
                  <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                </label>
                <button type="button" className="self-center btn px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 ring-purple-600 shadow-2xl shadow-inner shadow-purple-800">Submit</button>
              </form>
            </div>
          </section>
           </div>

    );
};

export default Home;