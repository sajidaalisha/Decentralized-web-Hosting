import React, { useEffect, useState } from "react";

const Results = (results) => {
  const [idNum, setIdNum] = useState();
  const [heads, setHeads] = useState();
  const [foundResult, setFoundResult] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setIdNum(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHeads(results.results[0]);
    setFoundResult(results.results.filter((r) => r[0] === idNum) );
  };
  useEffect(()=>{
    if(foundResult === "" || foundResult === []){
        setFoundResult(false)
    }
  } , [foundResult])
  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-4/5">
          <input type="text" onChange={handleChange} className="bg-black w-4/5 p-3" />
          <button type="submit" className="p-3 bg-white text-black w-1/5">search</button>
        </form>
      </div>
      <div className="flex justify-center">
      <div>
        {heads &&
          heads.map((r, i) => {
            return <p key={i}>{r}</p>;
          })}
      </div>
      <div>
        {
            foundResult ?
            <>{foundResult[0].map((r, i) => {
                return <p key={i}>{r}</p>;
            })}</>:<>
                notfound
            </>
            
        }
          
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
