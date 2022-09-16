import React, { useEffect, useState } from "react";

const Results = (results) => {
  const [idNum, setIdNum] = useState();
  const [heads, setHeads] = useState();
  const [foundResult, setFoundResult] = useState([0]);
  const [notFound , setNotFound] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setIdNum(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHeads(results.results[0]);
    setFoundResult(results.results.filter((r) => r[0] === idNum));
  };
  useEffect(()=>{
    if(foundResult[0] === 0){
      setNotFound(!notFound);
    }
  },[])
  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-3/5">
          <input
            type="text"
            onChange={handleChange}
            className="bg-black w-2/4 p-3 sm:w-4/5 rounded-l-full text-center"
          />
          <button type="submit" className="p-3 bg-white text-black w-2/4 sm:w-1/5 rounded-r-full">
            search
          </button>
        </form>
      </div>
      <div className="flex justify-between w-1/2 m-auto mt-5">
        <div>
          {heads &&
            heads.map((r, i) => {
              return <p key={i} className="p-1 m-2">{r}</p>;
            })}
        </div>
        <div>
          {foundResult[0] ? (
            foundResult[0].map((r, i) => {
              return <p key={i} className="p-1 m-2">{r}</p>;
            })
          ) : (
            <>{!notFound && <div>Id Not Found</div>}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;

// <div className="flex justify-center w-full sm:overflow-hidden overflow-scroll">
//       <table className="w-full">
//         <thead>
//           {results.results && (
//             <tr>
//               {results.results[0].map((ele, i) => {
//                 return <th key={i} className="py-2">{ele}</th>;
//               })}
//             </tr>
//           )}
//         </thead>
//         <tbody >
//           {results.results &&
//             results.results.slice(1, results.results.length).map((rows, i) => {
//               return (
//                 <tr key={i} >
//                   {rows.map((ele, i) => {
//                     return <td key={i} className="items-center text-center py-2">{ele}</td>;
//                   })}
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>

//     </div>
