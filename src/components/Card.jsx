import { Heading, Paragraph, Button } from "./index";
import { card } from "../assets";

const Card = () => {
  return (
    <div className="container gap-10 flex items-center max-md:flex-col justify-between  relative z-10">
        <div className="bg-backdrop"></div>
      <div className="basis-1/2 flex flex-col gap-5">
        <Heading>Find a better card deal in few easy steps.</Heading>
        <Paragraph>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </Paragraph>
        <Button />
      </div>
      <div className="basis-1/2">
        <img src={card} alt="" />
      </div>
    </div>
  );
};

export default Card;
