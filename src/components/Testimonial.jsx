import { feedback } from "../constants";
import { quotes } from "../assets";
import { Heading, Paragraph } from "./index";

const Testimonial = () => {
  return (
    <div className="container flex gap-10 justify-between flex-col items-center  relative z-10">
      <div className="w-[405px] h-[571px] absolute top-1/2 -right-1/3 white__gradient rounded-[471px] -z-10"></div>
      <div className="w-[200px] h-[570px] absolute top-1/2 -right-1/3 translate-x-[70%] pink__gradient -z-10"></div>
      <div className="flex justify-between items-center max-sm:flex-col">
        <Heading>What people are saying about us</Heading>
        <Paragraph>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </Paragraph>
      </div>
      <div className="mt-10">
        <ul className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {feedback.map((feed) => (
            <Feedback key={feed.id} {...feed} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;

const Feedback = ({ id, content, name, title, img }) => {
  return (
    <div
      className={`px-10 py-14 rounded-xl flex flex-col justify-between gap-6 items-start ${
        id === "feedback-1" && "bg-black-gradient"
      }`}
    >
      <img src={quotes} alt="quotes icon" />
      <p className="text-white  leading-[32.4px] text-lg">{content}</p>
      <div className="flex items-center gap-5">
        <img className="w-10 h-10" src={img} alt="profile" />
        <div>
          <h4 className="text-white">{name}</h4>
          <span className=" text-dimWhite">{title}</span>
        </div>
      </div>
    </div>
  );
};
