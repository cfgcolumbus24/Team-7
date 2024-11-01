import React, { useState } from 'react';

const ChatBox = ({ onSubmit })=> {
    const[text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        if (text.trim()) {
            onSubmit(text);
            setText('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="text-box">
            <input 
                className="text-input"
                type="text"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter your text..."
            />
            <button className="submit-button" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default ChatBox;