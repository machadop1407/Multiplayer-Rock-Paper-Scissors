import React, { useState, useContext } from "react";
import { GameStateContext, RoomContext } from "../Helpers/Context";

import "../App.css";
import * as code from "crypto";

function CreateGame({ socket }) {
  const [codeGenerated, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const { gameState, setGameState } = useContext(GameStateContext);
  const { gameRoom, setGameRoom } = useContext(RoomContext);

  const generateCode = () => {
    const codeGen = code.randomBytes(2).toString("hex");
    setCode(codeGen);
    setShowCode(true);
    socket.emit("join_game", codeGen);
    setGameRoom(codeGen);
  };

  const goToGame = () => {
    setGameState("running");
  };
  return (
    <>
      {showCode ? (
        <>
          <button onClick={goToGame}>Start Game</button>
          <h2>{codeGenerated}</h2>
        </>
      ) : (
        <button onClick={generateCode}>Generate Code</button>
      )}
    </>
  );
}

export default CreateGame;
