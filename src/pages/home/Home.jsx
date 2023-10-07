import { useLoaderData } from "react-router-dom";
import ServiceData from "../../components/ServiceData";
import { AiFillCheckCircle } from 'react-icons/ai';
import VideoPart from "../../components/VideoPart";
import ShortTrainer from "../trainerdata/ShortTrainer";

const Home = () => {
    const services = useLoaderData()
    return (

     <div className="px-8 md:px-28">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-[150px] items-center py-[100px]">
        <div className="space-y-4">
        <h2 className="mb-9 text-3xl font-bold hover:underline ">WELCOME TO LASKA</h2>
        <p className="text-lg text-slate-700">LASKA is founded with our passion for yoga and we would love to spread that love to more and more people.</p>
        <p  className="text-lg text-slate-700">At Laska, we do not only teach yoga, we seek to create a yoga community where we can share daily matters, stress at work or problems in life. Yoga is the great recipe to communicate and balance your mind and body.</p>
        </div>

        <div>
        <img className="w-[500px] " src="https://watermark.lovepik.com/photo/20211208/large/lovepik-young-female-yoga-moves-picture_501609711.jpg"></img>
        </div>
     </div>
     
     <h2 className="text-center text-3xl font-bold">Our Services</h2>
     <div className="flex gap-2 justify-center">
   <p  className="border-b-4 border-b-fuchsia-600 w-[100px]"></p>
   <AiFillCheckCircle className="text-fuchsia-600"></AiFillCheckCircle>
    <p  className="border-b-4 border-b-fuchsia-600 w-[100px]"></p>
   </div>
     <p className="text-center mt-6 text-sm text-slate-500 w-full md:w-[720px] mx-auto">Elevate your well-being with our tailored yoga services. Expert instructors, serene environments, and personalized sessions await you. Embrace tranquility and nurture your mind, body, and soul with us.</p>
 
    
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[80px] gap-14">
            {
                services.map(service => <ServiceData key={service.id} service={service}></ServiceData>)
            }
        </div>
        <VideoPart></VideoPart>
       <div className="my-20">
       <h3 className="text-3xl text-center">OUR BEST <span className="text-fuchsia-600">TRAINER</span></h3>
       <div className="flex justify-between items-center">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[80px] gap-14 items-end ">
            {
                services.map(trainer => <ShortTrainer key={trainer.id} trainer={trainer}></ShortTrainer>)
            }
        </div>

        <div>
        <h3 className="text-2xl font-semibold">Trained By <span  className="text-fuchsia-600">Top</span> Trainers</h3>
            <img className="w-[400px] mt-5 " src="https://img.freepik.com/free-photo/yoga-teacher-teaching-class_23-2148925739.jpg?w=2000"></img>
        </div>
        </div>
       </div>
     </div>
    );
};

export default Home;