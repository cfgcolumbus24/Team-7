import { useState } from 'react';
import PropTypes from 'prop-types';

const ChatBox = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') handleSubmit();
  };

  const handleGenerateGraph = () => {
    return;
  }

  return (
    <div className="text-box">
      <div className="mb-4">
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter your text..."
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="flex-1 p-2 rounded-md border border-[rgba(39,62,127,0.87)] text-gray-700"
        />
        <button
          onClick={handleSubmit}
          className="rounded-lg border-2 border-transparent px-4 py-2 ml-2 my-1 text-base font-semibold bg-[#adcaff] hover:border-[#508aff] transition-colors"
        >
          Submit
        </button>
      </div>
      <button
          onClick={handleGenerateGraph}
          className="rounded-lg border-2 border-transparent px-4 py-2 ml-2 my-1 text-base font-semibold bg-[#adcaff] hover:border-[#508aff] transition-colors"
        >
          Generate Graph
        </button>
    </div>
  );
};
ChatBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ChatBox;

