import { useState } from 'react'
import './App.css'
import ChatBox from './ChatBox'

function App() {
  const handleTextSubmit = (inputText) => {
    console.log('Input: ', inputText);
  };

  return (
    <>
      <h1>Text Box:</h1>
      <ChatBox onSubmit={handleTextSubmit} />
    </>
  );
};

export default App;
