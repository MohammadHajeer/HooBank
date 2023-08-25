import { bill, google, apple } from "../assets";
import { Heading, Paragraph } from "./index";

const Billing = () => {
  return (
    <div className="container gap-10 flex items-center max-md:flex-col-reverse justify-between relative z-10">
        <div className="w-[405px] h-[571px] absolute top-1/2 -left-1/3 white__gradient rounded-[471px] -z-10"></div>
        <div className="w-[200px] h-[570px] absolute top-1/2 -left-1/3 translate-x-[70%] pink__gradient -z-10"></div>
      <div className="basis-1/2">
        <img src={bill} alt="bills" />
      </div>
      <div className="basis-[40%] flex flex-col gap-5">
        <Heading>Easily control your billing & invoicing.</Heading>
        <Paragraph>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </Paragraph>
        <div className="flex items-center gap-5 mt-10 max-md:justify-center">
          <img src={google} alt="google" />
          <img src={apple} alt="apple" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
