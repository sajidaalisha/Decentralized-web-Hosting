import React from "react";
import { useState } from "react";
import CsvReader from "./CsvReader";
const History = (results) => {
  const resArr = Object.keys(results).map((key) => results[key]);
  const [displayResult, setDisplayResult] = useState();
  return (
    <div className="bg-zinc-800 text-white pb-32">
      <div className="flex p-5 items-center justify-center text-2xl font-bold">
        Available Results
      </div>
      <div className="flex justify-center flex-col m-10">
        {resArr.map((ele, i) => {
          return (
            <div key={i} className="flex justify-center">
              <p
                className="bg-black rounded-full w-1/2 flex justify-center cursor-pointer m-2 p-2 text-lg"
                onClick={Promise.then(() => {
                  setDisplayResult(
                    `https://gateway.ipfs.io/ipfs/${ele.fileHash}`
                  );
                })}
              >
                Results {i + 1}
              </p>
            </div>
          );
        })}
      </div>
      <div className="selectedResults">
        <div>
          {displayResult ? (
            <CsvReader file={displayResult} />
            
          ) : (
            <p className="flex justify-center text-lg">Select Any Results</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
