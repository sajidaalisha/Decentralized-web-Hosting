import React from "react";

const Results = (props)=>{

    return(
        <div className="flex justify-center w-full sm:overflow-hidden overflow-scroll">
      <table className="w-full">
        <thead>
          {props.results && (
            <tr>
              {props.results[0].map((ele, i) => {
                return <th key={i} className="py-2">{ele}</th>;
              })}
            </tr>
          )}
        </thead>
        <tbody >
          {props.results &&
            props.props.slice(1, props.props.length).map((rows, i) => {
              return (
                <tr key={i} >
                  {rows.map((ele, i) => {
                    return <td key={i} className="items-center text-center py-2">{ele}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      
    </div>
    )
}

export default Results;