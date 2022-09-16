import heroimg from "../asserts/image.png";
const Student = () => {
  return (
    <div className="flex w-full h-full items-center text-white flex-col sm:flex-row">
      <div className="w-1/2 m-10 sm:w-full">
        <h1 className="flex text-5xl justify-center py-10 px-14 font-bold w-full">
          Get your data from decentralized IPFS network
        </h1>
      </div>
      <div className="w-full p-10 m-0 sm:w-full justify-center flex">
        <img src={heroimg} alt="IPFS" className="w-1/2 h-1/2"/>
      </div>
    </div>
  );
};

export default Student;
