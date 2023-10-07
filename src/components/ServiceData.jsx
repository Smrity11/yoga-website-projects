/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


const ServiceData = ({service}) => {
    const {category,title,event_date,duration,image} =service
    return (
        <div>
            <div className="card p-3 card-compact bg-base-100 shadow-xl">
  <figure><img  src={image} alt="Shoes" /></figure>
  <div className="card-body justify-center grid items-center text-center">
    <h2 className="text-2xl font-bold">{category}</h2>
    <h2 className="text-xl font-medium">{title}</h2>
    <p>Event Date: <span className="font-bold">{event_date}</span></p>
    <p>Duration: <span className="font-bold">{duration}</span></p>
    <div className="card-actions ">
      <NavLink className="w-full" to="services"><button className="btn w-full border bg-fuchsia-600 text-white">Learn More</button></NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceData;