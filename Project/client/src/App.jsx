import ChatBox from './ChatBox';
import Table from './DataTable';
import { useState, useMemo } from 'react';
import { useTable } from "react-table";
import React from 'react';

function App() {

  const [tableData, setTableData] = useState([
    { _id: "1", treatment: "yes", Changes_Habits: "yes" },
    { _id: "2", treatment: "yes", Changes_Habits: "no" },
    { _id: "3", treatment: "no", Changes_Habits: "no" }
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Treatment",
        accessor: "treatment",
      },
      {
        Header: "Changed Habits",
        accessor: "Changes_Habits",
      }
    ],
    []
  );
  

  const queryAI = async (inputText) => {
    try {
      const response = await fetch('http://localhost:5001/llm/query', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify({
          prompt: inputText
        })
      });
      const data = await response.json();
      console.log(data);

      // Minimize Data
      let smallData = [];
      for (let i = 0; i <= 10; i++){
        smallData.push(data[i]);
      }

      setTableData(smallData);
      return smallData;
    } catch (error) {
      console.error('Error Querying Data:', error);
    }
  };

  console.log(Array.isArray(tableData), tableData);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tableData });

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#e4f4ff]">
//       <h1 className="text-2xl font-bold m-0 p-0 leading-tight">Data Search Tool</h1>
//       <div className="flex flex-col border rounded-md w-[700px] h-[600px] bg-white shadow-lg p-4">
//         <div className="flex-grow">
//           <Table jsonData={tableData}/>
//         </div>
//         {/* The ChatBox component will be at the bottom */}
//         <ChatBox onSubmit={queryAI} />
//       </div>
//     </div>
//   );
// };

return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#e4f4ff]">
    <h1 className="text-2xl font-bold m-0 p-0 leading-tight">Data Search Tool</h1>
    <div className="flex flex-col border rounded-md w-[700px] h-[600px] bg-white shadow-lg p-4">
      <div className="flex-grow">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* The ChatBox component will be at the bottom */}
      <ChatBox onSubmit={queryAI} />
    </div>
  </div>
);
}

export default App;
