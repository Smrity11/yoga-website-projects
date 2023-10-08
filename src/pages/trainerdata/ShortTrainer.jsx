/* eslint-disable react/prop-types */



const ShortTrainer = ({ trainer }) => {
  const { trainers } = trainer;
  return (
    <div>
      <div className="grid items-center justify-center text-center space-y-3">
      <div className="avatar">
  <div className="w-20 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2">
    <img  src={trainers?.picture} />
  </div>
</div>
        <h3 className="text-xl font-bold">{trainers.name}</h3>
      </div>
    </div>
  );
};

export default ShortTrainer;
