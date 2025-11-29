import { useState } from "react";
import Button from "@mui/material/Button";
import "./LudoBoard.css";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });

  let blueMoves = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      blue: prevMoves.blue + 1,
    }));
  };

  let yellowMoves = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      yellow: prevMoves.yellow + 1,
    }));
  };

  let greenMoves = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      green: prevMoves.green + 1,
    }));
  };

  let redMoves = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      red: prevMoves.red + 1,
    }));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Ludo Board</h1>
      <div className="board">
        <div className="box blue-box">
          <p>Blue moves: {moves.blue}</p>
          <Button
            variant="contained"
            onClick={blueMoves}
            style={{ backgroundColor: "blue" }}
          >
            +1
          </Button>
        </div>
        <div className="box yellow-box">
          <p>Yellow moves: {moves.yellow}</p>
          <Button
            variant="contained"
            onClick={yellowMoves}
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            +1
          </Button>
        </div>
        <div className="box green-box">
          <p>Green moves: {moves.green} </p>
          <Button
            variant="contained"
            onClick={greenMoves}
            style={{ backgroundColor: "green" }}
          >
            +1
          </Button>
        </div>
        <div className="box red-box">
          <p>Red moves: {moves.red}</p>
          <Button
            variant="contained"
            onClick={redMoves}
            style={{ backgroundColor: "red" }}>
            +1
          </Button>
        </div>
      </div>
    </>
  );
}
