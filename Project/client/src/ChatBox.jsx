import { useState } from 'react';
import PropTypes from 'prop-types';

const ChatBox = ({ onSubmit, messages }) => {
  const [text, setText] = useState('');
  const [showMessages, setShowMessages] = useState(false);

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
      setShowMessages(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') handleSubmit();
  };

  return (
    <div className="flex flex-col h-full">
      <div
        id="message-container"
        className="flex-grow overflow-y-auto border rounded-md p-2 mb-2"
      >
        {showMessages ? (
            messages.length > 0 ? (
                messages.map((message, index) => (
                    <div key={index} className="py-1 text-gray-700">
                        {message}
                    </div>
                ))
            ) : (
                <div className="text-gray-500">No messages yet...</div>
            )
        ) : (
            <div className="text-gray-500">Submit a query...</div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter your text..."
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          aria-label="Message input"
          className="flex-1 p-2 rounded-md border border-[rgba(39,62,127,0.87)] text-gray-700"
        />
        <button
          onClick={handleSubmit}
          className="rounded-lg border-2 border-transparent px-4 py-2 ml-2 my-1 text-base font-semibold bg-[#adcaff] hover:border-[#508aff] transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
ChatBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChatBox;

