import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <div className="container flex items-center max-md:flex-col max-md:items-start max-sm:items-center">
      <div className=" basis-1/2 flex-1 flex flex-col max-sm:items-center max-sm:text-center">
        <div className="flex items-center gap-3 bg-discount-gradient w-fit p-1 px-5 rounded-[10px] text-gray-600 text-lg max-sm:text-sm">
          <img src={discount} alt="discount icon" />
          <p>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="text-[72px] max-sm:text-[50px] text-white font-semibold mt-5">
          <div className="flex gap-7 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-col capitalize">
              The next
              <span className="text-gradient">generation</span>
            </div>
            <GetStarted />
          </div>
          <span className=" sm:whitespace-nowrap">Payment Method</span>
        </div>
      </div>
      <div className="relative">
        <img className="w-full relative md:left-[70px] z-10" src={robot} alt="robot" />
        <div className="w-[570px] h-[570px] absolute -top-1/3 left-0 blue__gradient"></div>
        <div className="w-[405px] h-[571px] absolute -top-1/2 right-0 white__gradient rounded-[471px]"></div>
        <div className="w-[200px] h-[570px] absolute -top-1/3 right-0 translate-x-[70%] pink__gradient"></div>
      </div>
    </div>
  );
};

export default Hero;
