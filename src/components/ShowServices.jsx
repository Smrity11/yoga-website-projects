import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const ShowServices = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useParams();
  console.log(data, service);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const singleData = service.find((service) => service.id == data.id);
  console.log(singleData);

  return (
    <>
      <div className="">
        {loading ? (
          <>
            <div className="flex">
              <p className="flex">Loading</p>
            </div>
          </>
        ) : singleData ? (
          <>
            <div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-7 bg-slate-100">
                <div className="space-y-3 py-10 px-8">
            <p className="uppercase text-fuchsia-600">Our Yoga studio</p>
            <h2 className="text-4xl font-bold">We Are an Awesome Team of Yoga Lovers</h2>
            <p>{singleData.description}</p>
            <p>1. {singleData?.benefits[0]}</p>
            <p>2. {singleData?.benefits[1]}</p>
            <p>3. {singleData?.benefits[2]}</p>
            <p>4. {singleData?.benefits[3]}</p>
                </div>
                <div>
                  <img src={singleData.image}></img>
                </div>
              </div>
                <div className="mt-[70px] grid justify-center mx-auto text-center">
                   
                    <p className="text-lg text-slate-600">   What We Do</p>
                    <h2 className="text-3xl font-semibold ">Our Prices Plans</h2>
                </div>
              <div className="my-14 grid px-8 lg:px-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center">
                <div className="h-[410px] shadow-md bg-fuchsia-100 border border-fuchsia-700 grid justify-center text-center px-4 py-10">
                  <h1 className="text-3xl font-semibold ">Standard Plan</h1>
                  <p className="text-slate-500 mt-[-20px]">Price per week</p>
                  <h1 className="font-bold text-3xl mt-[-20px] border-b-2 ">{singleData.ticket_price}</h1>
                  <p className="text-slate-600 ">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <p className="text-fuchsia-700 font-bold border h-9 pt-1">Call Now</p>
                </div>
                <div className="h-[460px] shadow-md bg-fuchsia-200 border border-fuchsia-700 grid justify-center text-center px-4 py-10">
                  <h1 className="text-3xl font-semibold ">Professional Plan</h1>
                  <p className="text-slate-500 mt-[-20px]">Price per week</p>
                  <h1 className="font-bold text-fuchsia-800 text-3xl mt-[-20px] border-b-2 ">{singleData.ticket_price1}</h1>
                  <p className="text-slate-600">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <p className="text-fuchsia-700 font-bold border h-9 pt-1">Call Now</p>
                </div>
                <div className="h-[410px] shadow-md bg-fuchsia-100  border border-fuchsia-700 grid justify-center text-center px-4 py-10">
                  <h1 className="text-3xl font-semibold">Private Plan</h1>
                  <p className="text-slate-500 mt-[-20px]">Price per week</p>
                  <h1 className="font-bold text-3xl  mt-[-20px] border-b-2 ">{singleData.ticket_price2}</h1>
                  <p className="text-slate-600">
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                  </p>
                  <p className="text-fuchsia-700 font-bold border h-9 pt-1">Call Now</p>
                </div>
                
              </div>
            </div>
          </>
        ) : (
          <p>Data not found</p>
        )}
      </div>
    </>
  );
};

export default ShowServices;
