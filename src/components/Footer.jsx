import { footerLinks } from "../constants";
import { socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="container ">
      <div className="flex justify-between items-start gap-5 border-b-[1px] border-b-dimWhite pb-10 flex-wrap max-ss:flex-col">
        <div className="basis-[30%] max-sm:basis-[45%] max-ss:text-center">
          <img
            className="w-[286px] ss:-translate-x-[12px] max-ss:mx-auto"
            src={logo}
            alt="logo"
          />
          <p className="text-dimWhite leading-relaxed mt-5 text-lg">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((title) => (
          <div
            key={title.title}
            className="max-sm:basis-[45%] max-ss:text-center max-ss:w-full"
          >
            <h3 className="text-white mb-5 text-lg">{title.title}</h3>
            <ul className="flex flex-col gap-3">
              {title.links.map((link) => (
                <li key={link.name}>
                  <a className="text-dimWhite" href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="py-10 flex justify-between items-center max-ss:flex-col-reverse gap-5">
        <p className="text-dimWhite text-lg max-ss:text-center">
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <ul className="flex gap-5 items-center">
          {socialMedia.map((link) => (
            <li key={link.id}>
              <a href={link.link}>
                <img src={link.icon} alt="icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
