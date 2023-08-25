import { features } from "../constants";
import Button from "./Button";
import { Paragraph, Heading } from "./index";

const Business = () => {
  return (
    <div className="container flex gap-10 justify-between max-md:flex-col items-center  relative z-10">
      <div className="bg-backdrop">w</div>
      <div className="basis-1/2 flex flex-col gap-5">
        <Heading>You do the business, we’ll handle the money.</Heading>
        <Paragraph>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </Paragraph>
        <Button />
      </div>
      <div className="basis-[45%]">
        <ul className="flex flex-col gap-1">
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Business;

const Feature = ({ icon, title, content, id }) => {
  return (
    <div
      className={`p-5 flex items-center rounded-xl gap-10 max-xs:flex-col ${
        id === "feature-2" && "bg-black-gradient"
      }`}
    >
      <div className="border-4 border-dimBlue block w-20 p-3 rounded-full">
        <img src={icon} alt="icon" className="w-full" />
      </div>
      <div className="flex flex-col max-xs:text-center">
        <h3 className="text-white text-lg">{title}</h3>
        <p className=" text-dimWhite">{content}</p>
      </div>
    </div>
  );
};