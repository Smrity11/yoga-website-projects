/* eslint-disable react/prop-types */

const ServiceData = ({service}) => {
    const {category,title,event_date,duration,image} =service
    return (
        <div >
            <div className="card p-3 card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[200px]" src={image} alt="Shoes" /></figure>
  <div className="card-body justify-center grid items-center text-center">
    <h2 className="text-2xl font-bold">{category}</h2>
    <h2 className="text-xl font-medium">{title}</h2>
    <p>Event Date: <span className="font-bold">{event_date}</span></p>
    <p>Duration: <span className="font-bold">{duration}</span></p>
    
  </div>
</div>
        </div>
    );
};

export default ServiceData;