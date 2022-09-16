import React, { useState } from "react";

const Results = (results)=>{
    const [idNum , setIdNum] = useState()
    const [foundResult , setSoundResult] = useState()

    const handleChange = (e)=>{
        e.preventDefault()
        setIdNum(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setSoundResult( results.results.map((rows)=>{
            return(
                rows.filter((row)=>{
                    return row
                })
            )
        }))
         console.log(foundResult)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} className="bg-black"/>
                <button type="submit">search</button>
            </form>
        </div>
    )
}

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