import React from 'react';
import './emojibutton.css';

function EmojiButton({ emoji, setEmoji }) {
  return (
    
    <div className='emoji-item' onClick={() => setEmoji(emoji)}>
      {emoji}
    </div>
  );
}

export default EmojiButton;