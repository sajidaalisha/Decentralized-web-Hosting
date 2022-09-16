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

    response.then((v)=> setResults(v.data));
  }, [file]);
  return <> {results && <Results results={results} />}</>;
};

export default CsvReader;
