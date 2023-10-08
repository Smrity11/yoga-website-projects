import { NavLink, useLoaderData } from "react-router-dom";

const Services = () => {
    const serviceFullData = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center px-8 md:px-16 gap-5 my-16">
            {
                serviceFullData.map(service => <div key={service.id}>
                    <div>
            <div className="card p-2 card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[200px]" src={service.image} alt="Shoes" /></figure>
  <div className="card-body justify-center grid items-center text-center">
    <h2 className="text-2xl font-bold">{service.category}</h2>
    <h2 className="text-xl font-medium">{service.title}</h2>
    <p>Event Date: <span className="font-bold">{service.event_date}</span></p>
    <p>Duration: <span className="font-bold">{service.duration}</span></p>
    <div className="card-actions ">
      <NavLink className="w-full" to={`/service/${service.id}`}><button className="btn w-full border bg-fuchsia-600 text-white">Learn More</button></NavLink>
    </div>
  </div>
</div>
        </div>
                </div>)
            }
        </div>
    );
};

export default Services;