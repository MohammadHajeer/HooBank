import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="w-[140px] h-[140px] rounded-full bg-blue-gradient flex justify-center items-center text-lg">
      <div className=" bg-primary w-[137px] h-[137px] rounded-full flex justify-center items-center">
        <div className="text-gradient">
        <span className="flex items-center gap-1 text-lg font-medium">
          Get
          <img src={arrowUp} alt="arrow icon" />
        </span>
        Started
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
