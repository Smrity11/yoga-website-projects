import { FaRegBell,FaMedkit } from 'react-icons/fa';

import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Welcome = () => {

    useEffect(() => {
        Aos.init({
          duration: 5000, 
          easing: "ease-in-out", 
          
        });
      }, []);
// 

// 
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-5 gap-10items-center py-[100px]">
        <div className="space-y-4 col-span-3">
        <h2
        data-aos="fade-right"
         className="mb-9 text-3xl font-bold hover:underline ">WELCOME TO L<span className='text-fuchsia-500'>A</span>SK<span className='text-fuchsia-500'>A</span></h2>
        <p className="text-lg text-slate-700">LASKA is founded with our passion for yoga and we would love to spread that love to more and more people.</p>
        <p  className="text-lg text-slate-700">At Laska, we do not only teach yoga, we seek to create a yoga community where we can share daily matters, stress at work or problems in life. Yoga is the great recipe to communicate and balance your mind and body.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
            <div className="flex gap-6 ">
                <div  className='border rounded-full border-fuchsia-600 p-2 h-[35px]'> <FaRegBell></FaRegBell> </div>
                <p className='text-lg font-semibold'>BALANCE BODY AND MIND</p>
            </div>
            <div className="flex gap-6">
            <div  className='border rounded-full border-fuchsia-600 p-2 h-[35px]'>  <FaMedkit></FaMedkit> </div>

                <p className='text-lg font-semibold'>HEALTHY DAILY LIFE</p>
            </div>
            <div className="flex gap-6">
            <div  className='border rounded-full border-fuchsia-600 p-2 h-[35px]'> <FaRegBell></FaRegBell> </div>

                <p className='text-lg font-semibold'>YOGA MONTH CHALANGE</p>
            </div>
        </div>
        </div>

        <div className=" w-full col-span-2">
        <img
        data-aos="fade-up"
         className="mt-10  " src="https://watermark.lovepik.com/photo/20211208/large/lovepik-young-female-yoga-moves-picture_501609711.jpg"></img>
        </div>
     </div>
        </div>
    );
};

export default Welcome;