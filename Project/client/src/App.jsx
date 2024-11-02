import ChatBox from './ChatBox';
import Table from './DataTable';
import { useState, useMemo } from 'react';
import { useTable } from "react-table";

function App() {

  const [tableData, setTableData] = useState(JSON.stringify([
    { _id: "1", name: "Alice", age: 25, city: "New York" },
    { _id: "2", name: "Bob", age: 30, city: "Los Angeles" },
    { _id: "3", name: "Charlie", age: 35, city: "Chicago" }
  ]));
  

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e4f4ff]">
      <h1 className="text-2xl font-bold m-0 p-0 leading-tight">Data Search Tool</h1>
      <div className="flex flex-col border rounded-md w-[700px] h-[600px] bg-white shadow-lg p-4">
        <div className="flex-grow">
          <Table jsonData={tableData}/>
        </div>
        {/* The ChatBox component will be at the bottom */}
        <ChatBox onSubmit={queryAI} />
      </div>
    </div>
  );
};

export default App;
