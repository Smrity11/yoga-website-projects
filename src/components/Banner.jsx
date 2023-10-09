import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Banner = () => {
    useEffect(() => {
        Aos.init({
          duration: 5000, 
          easing: "ease-in-out", 
          
        });
      }, []);
    return (
        <div>
            <div className="hero h-[400px]" style={{backgroundImage: 'url(https://www.ciiblog.in/wp-content/uploads/2021/06/Yoga-Blog-Cover-scaled.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-end text-neutral-content mt-36 mr-0 lg:mr-[-700px]">
    <div className="max-w-md">
      <h1  data-aos="fade-down" className="mb-5 text-3xl font-bold">YOGA IS TRANSFORMATION AWAKWNING TO SELF</h1>
      <p className="mb-5">YOGA DOES NOT TAKE TIME ,IT GIVES TIME</p>
      <Link to="/register"><button className="px-6 py-2 border font-bold border-fuchsia-600 ">Lets Start</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;