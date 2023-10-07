/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShortTrainer = ({ trainer }) => {
  const { trainers } = trainer;
  return (
    <div>
  
      <div className="grid items-center space-y-3">
      <div className="avatar">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={trainers?.picture} />
  </div>
</div>
        <h3 className="text-xl font-bold">{trainers.name}</h3>
        <Link to="trainers" className="underline text-fuchsia-600">See more details</Link>
      </div>
    </div>
  );
};

export default ShortTrainer;
