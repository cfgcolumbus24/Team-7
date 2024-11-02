import './App.css'
import ChatBox from './ChatBox'

function App() {
  const handleTextSubmit = (inputText) => {
    console.log('Input: ', inputText);
  };

  return (
    <>
      <div className="card">
        <h1>Data Search Tool</h1>
        <ChatBox onSubmit={handleTextSubmit} />
      </div>
    </>
  );
};

export default App;
