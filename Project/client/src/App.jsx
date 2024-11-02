import ChatBox from './ChatBox';

function App() {
  const handleTextSubmit = (inputText) => {
    console.log('Input: ', inputText);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e4f4ff]">
      <h1 className="text-2xl font-bold m-0 p-0 leading-tight">Data Search Tool</h1>
      <div className="flex flex-col border rounded-md w-[700px] h-[600px] bg-white shadow-lg p-4">
        <div className="flex-grow">
          {/* Content above the input area, e.g., messages */}
        </div>
        {/* The ChatBox component will be at the bottom */}
        <ChatBox onSubmit={handleTextSubmit} />
      </div>
    </div>
  );
}

export default App;
