import React, { useContext, useState, useEffect } from "react";
import "./Game.css";
import { RoomContext } from "../Helpers/Context";
function Game({ socket }) {
  const [choice, setChoice] = useState({ yourChoice: "", opponentChoice: "" });
  const [result, setResult] = useState({ winner: "", message: "" });
  const [showResult, setShowResult] = useState({
    youChose: false,
    opponentChose: false,
  });
  const { gameRoom, setGameRoom } = useContext(RoomContext);

  const submitChoice = () => {
    socket.emit("make_choice", { room: gameRoom, choice: choice.yourChoice });
    setShowResult({
      youChose: true,
      opponentChose: showResult.opponentChose,
    });
  };

  useEffect(() => {
    socket.on("receive_choice", (data) => {
      setChoice({ yourChoice: choice.yourChoice, opponentChoice: data });
      setShowResult({
        youChose: showResult.youChose,
        opponentChose: true,
      });
    });
  });

  useEffect(() => {
    if (showResult.youChose && showResult.opponentChose) {
      calculateWinner();
    }
  }, [showResult.youChose, showResult.opponentChose]);

  const calculateWinner = () => {
    if (choice.yourChoice === choice.opponentChoice) {
      setResult({
        winner: "No One",
        message: `You both chose ${choice.yourChoice}`,
      });
    } else if (
      choice.yourChoice === "rock" &&
      choice.opponentChoice == "paper"
    ) {
      setResult({
        winner: "Your Opponent",
        message: `You chose: ${choice.yourChoice} and your Opponent chose: ${choice.opponentChoice}`,
      });
    } else if (
      choice.yourChoice === "rock" &&
      choice.opponentChoice == "scissors"
    ) {
      setResult({
        winner: "You",
        message: `You chose: ${choice.yourChoice} and your Opponent chose: ${choice.opponentChoice}`,
      });
    } else if (
      choice.yourChoice === "paper" &&
      choice.opponentChoice == "rock"
    ) {
      setResult({
        winner: "You",
        message: `You chose: ${choice.yourChoice} and your Opponent chose: ${choice.opponentChoice}`,
      });
    } else if (
      choice.yourChoice === "paper" &&
      choice.opponentChoice == "scissors"
    ) {
      setResult({
        winner: "Your Opponent",
        message: `You chose: ${choice.yourChoice} and your Opponent chose: ${choice.opponentChoice}`,
      });
    } else if (
      choice.yourChoice === "scissors" &&
      choice.opponentChoice == "paper"
    ) {
      setResult({
        winner: "You",
        message: `You chose: ${choice.yourChoice} and your Opponent chose: ${choice.opponentChoice}`,
      });
    } else if (
      choice.yourChoice === "scissors" &&
      choice.opponentChoice == "rock"
    ) {
      setResult({
        winner: "Your Opponent",
        message: `You chose: ${choice.yourChoice} and your Opponent chose: ${choice.opponentChoice}`,
      });
    }
  };

  return (
    <div className="gameContainer">
      <h1>Make Your Choice</h1>
      <div className="options">
        <button
          onClick={() =>
            setChoice({
              yourChoice: "rock",
              opponentChoice: choice.opponentChoice,
            })
          }
        >
          Rock
        </button>
        <button
          onClick={() =>
            setChoice({
              yourChoice: "paper",
              opponentChoice: choice.opponentChoice,
            })
          }
        >
          Paper
        </button>
        <button
          onClick={() =>
            setChoice({
              yourChoice: "scissors",
              opponentChoice: choice.opponentChoice,
            })
          }
        >
          Scissors
        </button>
      </div>
      <button onClick={submitChoice}>Submit Choice</button>

      {result.winner ? (
        <div className="results">
          {" "}
          <h1>Winner: {result.winner}</h1> <p>{result.message}</p>
          <button
            onClick={() => {
              setShowResult({
                youChose: false,
                opponentChose: false,
              });
              setResult({ winner: "", message: "" });
              setChoice({ yourChoice: "", opponentChoice: "" });
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h1>You selected: {choice.yourChoice}</h1>

          {showResult.youChose && (
            <>
              <h1>Waiting for opponent to select...</h1>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Game;
