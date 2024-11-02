import ChatBox from './ChatBox';
import { useState, useMemo } from 'react';
import { useTable } from "react-table";
import React from 'react';

function QueryPage() {

  const [tableData, setTableData] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Timestamp",
        accessor: "Timestamp",
      },
      {
        Header: "Gender",
        accessor: "Gender",
      },
      {
        Header: "Country",
        accessor: "Country",
      },
      {
        Header: "Occupation",
        accessor: "Occupation",
      },
      {
        Header: "Treatment",
        accessor: "treatment",
      },
      {
        Header: "Self-Employed",
        accessor: "self_employed",
      },
      {
        Header: "Family History",
        accessor: "family_history",
      },
      {
        Header: "Days Indoors",
        accessor: "Days_Indoors",
      },
      {
        Header: "Growing Stress",
        accessor: "Growing_Stress",
      },
      {
        Header: "Changed Habits",
        accessor: "Changes_Habits",
      },

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
      for (let i = 0; i <= 20; i++){
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
  <div className="flex flex-col items-center justify-center min-h-screen ">
    <h1 className="text-2xl font-bold m-0 pb-8 leading-tight">Natural Language Querying</h1>
    <div className="flex flex-col border rounded-md w-full h-[600px] bg-white">
    <div className="flex-grow overflow-auto">
        <table {...getTableProps()} className="min-w-full border-collapse border border-gray-300">
          <thead className="border-b border-gray-400">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="px-4 py-2 border-r border-gray-300">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-b border-gray-300">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="px-4 py-2 border-r border-gray-300">
                      {cell.render("Cell")}
                    </td>
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

export default QueryPage;
