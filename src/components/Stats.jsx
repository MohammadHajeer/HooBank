import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="container">
      <ul className="flex justify-between items-center max-md:flex-col gap-5">
        {stats.map((stat, index) => (
          <>
            <li
              key={stat.id}
              className="text-white text-[40px] font-semibold flex items-center gap-2 max-sm:flex-col"
            >
              ${stat.value}
              <span className="text-[20px]">{stat.title}</span>
            </li>
            {index < 2 && <span className="text-white">|</span>}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
