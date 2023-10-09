import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowDropright  } from "react-icons/io";

const Events = () => {
    const EventData = useLoaderData()
    return (
        
       <div>
                     <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikIFt143NJY9BjRGl4QIDM5VKhr9aa0l286T3wSccfI1zDC1qoE3m8zasbfeZgibSJXQ&usqp=CAU)' }}>

<div className="absolute inset-0 bg-white opacity-60"></div>

<div className="absolute inset-0 flex flex-col text-black">
    <h1 className="text-4xl md:text-4xl font-bold  relative ml-36 mt-14">
    Event <span className='text-fuchsia-600'>List</span>
    <div className="absolute ml-4 mt-1 left-0 w-12 h-4 border-b border-fuchsia-600"></div>
  </h1>
  <div className="text-lg md:text-sm text-slate-600 mt-10 ml-40 flex items-center gap-3">
  <p >Home   </p>
  <IoMdArrowDropright></IoMdArrowDropright>
  <p> Events</p>
  </div>
    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 px-8  md:px-20">
            {
                EventData.map(event => <div key={event.id}>
                    
                    <div className="card card-compact  bg-base-100 ">
  <figure><img src={event.image} alt="Shoes" /></figure>
  <div className="card-body">
  <p className="text-lg text-fuchsia-500">{event.name}</p>
    <h2 className="card-title">{event.title}</h2>
    <p className="text-base text-slate-600">Yoga is a physical, mental, and spiritual practice or discipline. There is a broad variety of schools, practices and goals in Hinduism, Buddhism (including Vajrayana and Tibetan Buddhism and Jainism....</p>
    <p className="border text-lg">{event.time}</p>
    <p className="border text-lg">{event.date}</p>
    <p className="border text-lg">{event.location}</p>
    <div className="card-actions w-full">
    <Link to="commingsoon" className="w-full">
    <button className="btn bg-fuchsia-600 w-full text-white font-semibold">Learn More</button>

    </Link>
    </div>
  </div>

                    </div>
                </div>)
            }
        </div>
       </div>
    );
};

export default Events;