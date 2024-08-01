import React, { useState } from "react";
import Box from "./Box";
import { Button } from "@fluentui/react";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [cturn, setTurn] = useState("X");
  const [winner, setwinner] = useState("");
  const[use,setuse]=useState("a")
  const checkwinner = (state) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i]; //means state of 0,1,2
      if (state[a] === state[b] && state[a] == state[c]) {
        return state[a];
      }
    }
  };
 function retry()
 {
  setState(Array(9).fill(null));
 }
  const handleindex = (index) => {
    // const statecopt=Array.from(state);

    if (state[index] === null) {
      state[index] = cturn;

      const a = checkwinner(state);
      if (a) {
        setwinner(a);
      }
      setTurn(cturn === "X" ? "O" : "X");
      // setState(statecopt);
      console.log(state);
    }
  };
  return (
    <>
      <div className="board">
        <div className="rows">
          <Box onClick={() => handleindex(0)} value={state[0]} />
          <Box onClick={() => handleindex(1)} value={state[1]} />
          <Box onClick={() => handleindex(2)} value={state[2]} />
        </div>
        <div className="rows">
          <Box onClick={() => handleindex(3)} value={state[3]} />
          <Box onClick={() => handleindex(4)} value={state[4]} />
          <Box onClick={() => handleindex(5)} value={state[5]} />
        </div>
        <div className="rows">
          <Box onClick={() => handleindex(6)} value={state[6]} />
          <Box onClick={() => handleindex(7)} value={state[7]} />
          <Box onClick={() => handleindex(8)} value={state[8]} />
        </div>
         
        <div className="line"></div>
      </div>
      <div>
        <h4>{winner ? winner + "is the winner" : `${cturn} Turn`}</h4>
      </div>
      {<button className="restart-button" onClick={retry}>Restart</button>}
    </>
  );
}

export default Board;
