import { useLoaderData } from "react-router-dom";
  import { IoMdArrowDropright  } from "react-icons/io";

const Trainers = () => {
    const TrainerDetails = useLoaderData()
    return (
        <div>
                      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikIFt143NJY9BjRGl4QIDM5VKhr9aa0l286T3wSccfI1zDC1qoE3m8zasbfeZgibSJXQ&usqp=CAU)' }}>

<div className="absolute inset-0 bg-white opacity-60"></div>

<div className="absolute inset-0 flex flex-col text-black">
    <h1 className="text-4xl md:text-4xl font-bold  relative ml-36 mt-14">
    Trainer <span className='text-fuchsia-600'>List</span>
    <div className="absolute ml-4 mt-1 left-0 w-12 h-4 border-b border-fuchsia-600"></div>
  </h1>
  <div className="text-lg md:text-sm text-slate-600 mt-10 ml-40 flex items-center gap-3">
  <p >Home   </p>
  <IoMdArrowDropright></IoMdArrowDropright>
  <p> Trainers</p>
  </div>
    </div>
</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 my-[60px] justify-center items-center mx-auto ">
          {
            TrainerDetails.map(trainer => <div key={trainer.id}>
  
  
  <div className="max-w-xs w-full bg-gray-100 p-4 m-4 rounded-lg shadow-md mx-auto">
  <div className="text-center mt-4">
    <h1 className="text-xl font-semibold">{trainer?.category}</h1>
    <p className="text-gray-600">{trainer?.trainers?.name}</p>
    <div className="border-b-2 border-red-500 my-4 mx-auto w-8"></div>
  </div>
  <div className="bg-gray-200 p-2 rounded-md overflow-hidden">
    <img
      src={trainer.trainers?.picture}
      alt="Katrina"
      className="w-full h-52 object-cover transform transition-transform hover:scale-110"
    />
  </div>
</div>
  
                </div>)
           }
          </div>
        </div>
    );
};

export default Trainers;