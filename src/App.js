import "./App.css";
import { useState, useEffect, useContext } from "react";
import CreateGame from "./Components/CreateGame";
import EnterGame from "./Components/EnterGame";
import { GameStateContext, RoomContext } from "./Helpers/Context";

import io from "socket.io-client";
import Game from "./Components/Game";
let socket;

const CONNECTION_PORT = "https://rpsmultiplayergame.herokuapp.com/";

function App() {
  const [menuState, setMenuState] = useState("initial");
  const [gameState, setGameState] = useState("starting");
  const [gameRoom, setGameRoom] = useState("");

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      <RoomContext.Provider value={{ gameRoom, setGameRoom }}>
        <div className="App">
          {gameState == "starting" ? (
            <>
              <div className="top">
                <h1>Welcome to Rock, Paper and Scissors</h1>
                <p className="intro">
                  Connect With a friend and play the game! To create a game,
                  press the create game button. You will receive a code that you
                  can send to your friend to enter in the same game as you.
                </p>
              </div>

              <div className="menu">
                {menuState == "initial" ? (
                  <>
                    <button onClick={() => setMenuState("create")}>
                      Create New Game
                    </button>
                    <button onClick={() => setMenuState("enter")}>
                      Enter Game
                    </button>
                  </>
                ) : menuState == "create" ? (
                  <CreateGame socket={socket} />
                ) : (
                  <EnterGame socket={socket} />
                )}
              </div>
            </>
          ) : (
            <Game socket={socket} />
          )}
        </div>
      </RoomContext.Provider>
    </GameStateContext.Provider>
  );
}

export default App;
