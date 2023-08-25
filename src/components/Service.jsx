import { Heading, Paragraph, Button } from "./index";

const Service = () => {
  return (
    <div className="container ">
      <div
        className="py-[72px] px-[97px] max-sm:p-10 bg-black-gradient-2 rounded-2xl
     flex justify-between items-center max-md:flex-col gap-5 max-md:items-start"
      >
        <div>
          <Heading>Let’s try our service now!</Heading>
          <div className="sm:w-[445px] max-sm:mt-5">
            <Paragraph>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </Paragraph>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Service;
