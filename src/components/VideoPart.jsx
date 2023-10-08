import { FaVideo } from "react-icons/fa";

const VideoPart = () => {
  return (
    <div>
      <h2 className="text-3xl mt-7">
        NEW <span className="text-fuchsia-600">VIDEO</span> TOPICS
      </h2>
      <div className="static md:flex gap-[100px] justify-between items-center">
        <div className=" space-y-6  md:mt-[-230px]">
          <div className="flex gap-4">
            <p className="w-[60px] h-[50px] bg-fuchsia-600 grid items-center justify-center text-white">
              <FaVideo className="w-[50px]"></FaVideo>
            </p>
            <div>
              <p className="text-lg">Become an yoga trainer at LASKA center</p>
              <p className="text-sm text-slate-700">
                Yoga is physical mental and spiritual practice...
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <p className="w-[60px] h-[50px] bg-fuchsia-600 grid items-center justify-center text-white">
              <FaVideo className="w-[50px]"></FaVideo>
            </p>

            <div>
              <p className="text-lg">Sarlein Roxi introduction</p>
              <p className="text-sm text-slate-700">
                Yoga is physical mental and spiritual practice...
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <p className="w-[60px] h-[50px] bg-fuchsia-600 grid items-center justify-center text-white">
              <FaVideo className="w-[50px]"></FaVideo>
            </p>

            <div>
              <p className="text-lg">Sky flow from sunschaser</p>
              <p className="text-sm text-slate-700">
                Yoga is physical mental and spiritual practice...
              </p>
            </div>
          
        </div>
      
          </div>
          <div className="video-container ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9MazN_6wdqI?si=k9JREexzC9homVXQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        
      </div>
    </div>
  );
};

export default VideoPart;
