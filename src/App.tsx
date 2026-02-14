import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState<{ top: string; left: string } | null>(null);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    moveButton();
  };

  const moveButton = () => {
    // We subtract larger margins (200x100) to ensure the button 
    // doesn't jump partially off-screen or under the edges.
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    
    // Explicitly adding "px" ensures the style object works in the browser
    setNoButtonPos({ top: `${y}px`, left: `${x}px` });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Down to earth, try again!",
      "Stubborn, not that easy!", "Surely not?", "Such a cute brat!",
      "Dont play with Pulse!", "Want me use my fingers to make you say yes?",
      "Phone kharab ho jayega!!", "You will whisper in my ear??",
      "Anju, Babyy, please say yes!!", "Be a good girl and say yes!",
      "You are already mine, just admit it!!",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="kisses" />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              style={{ width: "250px", height: "180px", borderRadius: "15px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="bear"
            />
            <h1 className="text-container">Anju, Baby, Will you be my Valentine?</h1>
            <div className="buttons-wrapper">
              <button
                className="yes-button"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button
                onClick={handleNoClick}
                onMouseEnter={moveButton} // Jumps when she tries to hover
                className="no-button"
                style={
                  noButtonPos 
                    ? { 
                        position: "fixed", 
                        top: noButtonPos.top, 
                        left: noButtonPos.left,
                        zIndex: 9999 // Ensure it stays above everything
                      } 
                    : {}
                }
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}