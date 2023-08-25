import { clients } from "../constants";

const Contributers = () => {
  return (
    <div className="container">
      <ul className=" flex justify-between items-center gap-20 max-sm:flex-col">
        {clients.map((client) => (
          <li key={client.id}>
            <img className="w-2/3 mx-auto" src={client.logo} alt="client brand" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contributers;
