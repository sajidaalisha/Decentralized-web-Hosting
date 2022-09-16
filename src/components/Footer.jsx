import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  const icons = " w-10 h-10 p-2 hover:animate-bounce";
  const links = "p-3";
  return (
    <div className="w-full flex flex-col h-fit bg-black text-white">
      <div className="flex flex-col sm:flex-row ">
        <div className="flex w-full justify-start flex-col mx-5 sm:w-3/2">
          <h1 className="text-lg m-5">References </h1>
          <div className="flex flex-col sm:flex-row justify-evenly">
            <div className="flex flex-row sm:flex-col justify-evenly">
              <a href="https://reactjs.org/docs/getting-started.html" className={links} target="_blank">
                Reactjs Docs
              </a>
              <a href="https://docs.ipfs.io/" className={links} target="_blank">IPFS Docs</a>
            </div>
            <div className="flex flex-row sm:flex-col justify-evenly">
              <a href="https://docs.fleek.co/" className={links} target="_blank">Fleek Docs</a>
              <a href="https://tailwindcss.com/docs/guides/create-react-app" className={links} target="_blank">Tailindcss Docs</a>
            </div>
            <div className="flex flex-row sm:flex-col justify-evenly">
            <a href="https://docs.infura.io/infura" className={links} target="_blank">Infura Docs</a>
            <a href="https://docs.ethers.io/v5/" className={links} target="_blank">Ethersjs Docs</a>

            </div>
          </div>
        </div>
        <div className="flex justify-center w-full p-2 m-5 sm:w-1/2 sm:justify-end items-end">
          <FaFacebook className={icons} />
          <FaInstagram className={icons} />
          <FaWhatsapp className={icons} />
          <FaTelegram className={icons} />
          <FaDiscord className={icons} />
        </div>
      </div>
      <div className="sm:w-full w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@DResults2022</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
