import React, { useState, useEffect, Fragment } from "react";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [nacionality, setNacionality] = useState("");

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  useEffect(() => {
    fetch("https://api.nationalize.io?name=vlado")
      .then((data) => data.json())
      .then((data) => setNacionality(data));
  }, []);
  // let first = [];
  // for (let index = 0; index < tableData.length; index++) {
  //   first.push(tableData[index].author.split(" "));
  // }
  // console.log(first);
  // console.log(nacionality);

  const data = tableData.map((tableData, index) => {
    return (
      <tbody key={Math.random()}>
        <tr key={Math.random()}>
          <th key={Math.random()}>{index + 1}</th>
          <th key={Math.random()} colSpan={2}>
            {tableData.quote}
          </th>
          <th key={Math.random()}>{tableData.author}</th>
          <th key={Math.random()}>{nacionality.country[0].country_id}</th>
        </tr>
      </tbody>
    );
  });

  return <Fragment>{data}</Fragment>;
};

export default Table;
