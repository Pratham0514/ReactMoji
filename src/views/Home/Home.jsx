import React, { useState } from 'react';
import './Home.css';
import EmojiButton from "./emojibutton";
import BColorButton from './BColorButton';


function Home() {
  const [emoji, setEmoji] = useState('😀');
  const [sliderValue, setSliderValue] = useState(50);
  const [bckcolor, setBckcolor] = useState('#fff');

  return (
  
     
      <div className="min-h-screen w-full relative flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
          }}
        />
        <div>
          <div className="home-card">
            <h1 className="highlight">
              This is Short tour with the Emoji Using
              <span className="sub-highlight">useState</span>
            </h1>
          </div>
        </div>
        <p className='sub-content'>
          This is Simple use of <span className="sub-highlight">useState</span>
        </p>

        <div className='emoji-box' style={{ fontSize: `${sliderValue}px`, backgroundColor: bckcolor }}>
          {emoji}
        </div>
        <div className='slider'>
          <input
            type='range'
            min='0'
            max='100'
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
          />
        </div>
        <div className='emoji-selector'>
          <EmojiButton emoji='🛫' setEmoji={setEmoji} />
          <EmojiButton emoji='😎' setEmoji={setEmoji} />
          <EmojiButton emoji='😃' setEmoji={setEmoji} />
          <EmojiButton emoji='😱' setEmoji={setEmoji} />
          <EmojiButton emoji='😇' setEmoji={setEmoji} />
          <EmojiButton emoji='🏰' setEmoji={setEmoji} />
          <EmojiButton emoji='🤩' setEmoji={setEmoji} />
          <EmojiButton emoji='👻' setEmoji={setEmoji} />
          <EmojiButton emoji='🏝️' setEmoji={setEmoji} />
          <EmojiButton emoji='🗽' setEmoji={setEmoji} />
          <EmojiButton emoji='🏞️' setEmoji={setEmoji} />
          <EmojiButton emoji='🛬' setEmoji={setEmoji} />
        </div>

        <div className='color-selector'>
          <BColorButton bckcolor='#15cfc9ff' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#64ef3aff' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#3357FF' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#F0E68C' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#FF69B4' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#8A2BE2' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#7FFF00' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#FFA500' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#800080' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#FF00FF' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#008000' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#0000FF' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#FFFF00' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#000000' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#ffffff' setBckcolor={setBckcolor} />
          <BColorButton bckcolor='#808080' setBckcolor={setBckcolor} />
        </div>
      </div>
  
  );
}

export default Home;