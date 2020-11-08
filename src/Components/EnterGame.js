import React, { useState, useContext } from "react";
import "../App.css";
import { GameStateContext, RoomContext } from "../Helpers/Context";

function EnterGame({ socket }) {
  const [codeEntered, setCodeEntered] = useState("");
  const { gameState, setGameState } = useContext(GameStateContext);
  const { gameRoom, setGameRoom } = useContext(RoomContext);

  const enterGame = () => {
    socket.emit("join_game", codeEntered);
    setGameRoom(codeEntered);
    setGameState("running");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Code..."
        onChange={(e) => setCodeEntered(e.target.value)}
      />
      <button onClick={enterGame}>Enter Game</button>
    </>
  );
}

export default EnterGame;
