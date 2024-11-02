import ChatBox from './ChatBox';
import { useState, useMemo } from 'react';
import { useTable } from "react-table";
import React from 'react';
import { Bar } from 'react-chartjs-2'; // Importing Chart.js for visualizing the graph

function QueryPage() {
  const [tableData, setTableData] = useState([]);
  const [showGraph, setShowGraph] = useState(false); // State to toggle the graph display

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "_id" },
      { Header: "Timestamp", accessor: "Timestamp" },
      { Header: "Gender", accessor: "Gender" },
      { Header: "Country", accessor: "Country" },
      { Header: "Occupation", accessor: "Occupation" },
      { Header: "Treatment", accessor: "treatment" },
      { Header: "Self-Employed", accessor: "self_employed" },
      { Header: "Family History", accessor: "family_history" },
      { Header: "Days Indoors", accessor: "Days_Indoors" },
      { Header: "Growing Stress", accessor: "Growing_Stress" },
      { Header: "Changed Habits", accessor: "Changes_Habits" },
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
        body: JSON.stringify({ prompt: inputText })
      });
      const data = await response.json();
      console.log(data);

      // Minimize Data
      let smallData = data.slice(0, 20); // Limit to first 20 entries
      setShowGraph(false); // Hide the graph and show the table
      setTableData(smallData);
      return smallData;
    } catch (error) {
      console.error('Error Querying Data:', error);
    }
  };

  // Sample Data for the graph
  const graphData = {
    labels: ['Treated with Stress', 'Treated without Stress', 'Not Treated with Stress', 'Not Treated without Stress'],
    datasets: [
      {
        label: 'Counts',
        data: [30, 70, 50, 50], // Sample counts for each category
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const generateGraph = () => {
    setShowGraph(true); // Set state to show the graph
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tableData });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold m-0 pb-8 leading-tight">Natural Language Querying</h1>
      <div className="flex flex-col border rounded-md w-full h-[600px] bg-white">
        <div className="flex-grow overflow-auto">
          {showGraph ? (
            // Render the graph when showGraph is true
            <div className="flex justify-center h-full">
              <Bar data={graphData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          ) : (
            // Render the table when showGraph is false
            <table {...getTableProps()} className="min-w-full border-collapse border border-gray-300">
              <thead className="border-b border-gray-400">
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} className="px-4 py-2 border-r border-gray-300">
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="border-b border-gray-300">
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()} className="px-4 py-2 border-r border-gray-300">
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <button onClick={generateGraph} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Generate Graph
        </button>
        {/* The ChatBox component will be at the bottom */}
        <ChatBox onSubmit={queryAI} />
      </div>
    </div>
  );
}

export default QueryPage;
