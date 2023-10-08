import { Link, useLoaderData } from "react-router-dom";
import ServiceData from "../../components/ServiceData";
import { AiFillCheckCircle, AiOutlineArrowRight } from "react-icons/ai";
import VideoPart from "../../components/VideoPart";
import ShortTrainer from "../trainerdata/ShortTrainer";
import Welcome from "../../components/Welcome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const services = useLoaderData();
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="px-8 md:px-28">
      <Welcome></Welcome>

      <h2 className="text-center text-3xl font-bold">Our Services</h2>
      <div className="flex gap-2 justify-center">
        <p className="border-b-4 border-b-fuchsia-600 w-[100px]"></p>
        <AiFillCheckCircle className="text-fuchsia-600"></AiFillCheckCircle>
        <p className="border-b-4 border-b-fuchsia-600 w-[100px]"></p>
      </div>
      <p className="text-center mt-6 text-sm text-slate-500 w-full md:w-[720px] mx-auto">
        Elevate your well-being with our tailored yoga services. Expert
        instructors, serene environments, and personalized sessions await you.
        Embrace tranquility and nurture your mind, body, and soul with us.
      </p>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[80px] gap-14">
          {services.slice(0, 3).map((service) => (
            <ServiceData key={service.id} service={service}></ServiceData>
          ))}
        </div>
        <div className="flex gap-3 items-center justify-center mx-auto text-center w-full mt-10 mb-[80px]">
          <Link to="/services">
            <p className="text-lg font-bold text-center cursor-pointer hover:underline">
              See All Services
            </p>
          </Link>
          <AiOutlineArrowRight className="text-fuchsia-700"></AiOutlineArrowRight>
        </div>
      </div>
      <VideoPart></VideoPart>
      <div className="my-20">
        <h3 className="text-3xl text-center">
          OUR BEST <span className="text-fuchsia-600">TRAINER</span>
        </h3>
        <div className="grid lg:flex justify-center items-center mx-auto gap-10">
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[80px] gap-14 mx-auto items-center justify-center">
              {services.slice(0, 6).map((trainer) => (
                <ShortTrainer key={trainer.id} trainer={trainer}></ShortTrainer>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Trained By <span className="text-fuchsia-600">Top</span> Trainers
            </h3>
            <img
              className="w-[400px] mt-5 "
              src="https://img.freepik.com/free-photo/yoga-teacher-teaching-class_23-2148925739.jpg?w=2000"
            ></img>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center mx-auto text-center w-full mt-10 mb-[80px]">
              <Link to="/trainers">
                <p className="text-lg font-bold text-center cursor-pointer hover:underline">
                  See All Trainers
                </p>
              </Link>
              <AiOutlineArrowRight className="text-fuchsia-700"></AiOutlineArrowRight>
            </div>
      </div>
    </div>
  );
};

export default Home;
