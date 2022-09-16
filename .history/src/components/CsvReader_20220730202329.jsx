import { useState } from "react";
import Papa from "papaparse";
import { useEffect } from "react";
import Results from "./Results";

const CsvReader = (file) => {
  const [results, setResults] = useState();
  useEffect(() => {
    const response = fetch(file?.file)
      .then((response) => response.text())
      .then((v) =>
        Papa.parse(v, {
          delimiter: ",",
          skipEmptyLines: true,
        })
      )
      .catch((err) => console.log(err));

    response.then((v) => setResults(v.data));
  }, []);
  return (
    <div className="flex justify-center w-full sm:overflow-hidden overflow-scroll">
      <table className="w-full">
        <thead>
          {results && (
            <tr>
              {results[0].map((ele, i) => {
                return <th key={i} className="py-2">{ele}</th>;
              })}
            </tr>
          )}
        </thead>
        <tbody >
          {results &&
            results.slice(1, results.length).map((rows, i) => {
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
      <Results results = {results}/>
    </div>
  );
};

export default CsvReader;
