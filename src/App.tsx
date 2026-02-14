import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  
  // TypeScript state for coordinates
  const [noButtonPos, setNoButtonPos] = useState<{ top: number; left: number } | null>(null);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    moveButton();
  };

  const moveButton = () => {
    // 150 and 60 are approximate button dimensions to keep it inside the screen
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 60);
    setNoButtonPos({ top: randomY, left: randomX });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Down to earth, try again!",
      "Stubborn, not that easy!",
      "Surely not?",
      "Such a cute brat!",
      "Dont play with Pulse!",
      "Want me use my fingers to make you say yes?",
      "Phone kharab ho jayega!!",
      "You will whisper in my ear??",
      "Anju, Babyy, please say yes!!",
      "Be a good girl and say yes!",
      "You are already mine, just admit it!!",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img 
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
              alt="bear-kisses" 
            />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              style={{ width: "250px", height: "180px", borderRadius: "15px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="cute-bear"
            />
            <h1 className="text-container">Anju, Baby, Will you be my Valentine?</h1>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button
                className="yes-button"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button
                onClick={handleNoClick}
                onMouseEnter={moveButton} // Jump when mouse hovers
                className="no-button"
                style={
                  noButtonPos 
                    ? { 
                        position: "fixed", 
                        top: `${noButtonPos.top}px`, 
                        left: `${noButtonPos.left}px`,
                        zIndex: 999 
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