import React from "react";
import { useState , useEffect } from "react";
import CsvReader from "./CsvReader";
const History = (results) => {
  const resArr = Object.keys(results).map((key) => results[key]);
  const [displayResult, setDisplayResult] = useState();
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1200);
  }, []);
  return (
    <div className="bg-zinc-800 text-white pb-32">
      <div className="flex p-5 items-center justify-center text-2xl font-bold">
        Available Results
      </div>
      {
        isDisplayed &&
        <div className="flex justify-center flex-col m-10">
        {resArr.map((ele, i) => {
          return (
            <div key={i} className="flex justify-center">
              <p
                className={
                  `bg-black rounded-full w-1/2 flex justify-center cursor-pointer m-2 p-2 text-lg`
                }
                onClick={() => {
                  setDisplayResult(
                    `https://gateway.ipfs.io/ipfs/${ele.fileHash}`
                  );
                }}
              >
                Results {i + 1}
              </p>
            </div>
          );
        })}
      </div>
      }
      
      <div className="selectedResults">
        <div>
          {displayResult ? (
            <CsvReader file={displayResult} />
          ) : (
            <p className="flex justify-center text-lg">Select any results mentioned above.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
