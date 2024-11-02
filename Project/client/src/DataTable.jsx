import React from "react";

const Table = ({ jsonData }) => {
  // Parse JSON data
  const data = typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;

  // Extract unique keys from all documents to create table headers
  const columns = Array.from(new Set(data.flatMap((doc) => Object.keys(doc))));
    console.log(columns);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((doc, rowIndex) => (
          <tr key={doc._id || rowIndex}>
            {columns.map((col) => (
              <td key={col}>{doc[col] !== undefined ? doc[col].toString() : ""}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;