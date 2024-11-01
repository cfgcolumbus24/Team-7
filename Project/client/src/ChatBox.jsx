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
            <div className="message-display">
                <div className="placeholder">Messages displayed here...</div>
            </div>
            <div className="input-area">
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
        </div>
    );
}

export default ChatBox;