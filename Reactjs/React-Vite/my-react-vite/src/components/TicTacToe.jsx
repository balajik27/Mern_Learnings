import '../assets/css/style.css'
import { useState } from 'react';

function Square({handleInput , value}) {
  return (
    <div className="square" onClick={handleInput}>
      {value}
    </div>
  );
}

function calculateWinner(value){
    const lines = [
        [0, 1, 2],
        [3 ,4, 5],
        [6 ,7 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8]
    ]

    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(value[a] && value[a] === value[b] && value[b] === value[c]){
            return value[a];
        }
    }
    return null;
}

function Board({ handleInput , value , xIsnext }){


    let winner = calculateWinner(value);

    if(winner){
        winner = winner + " is the Winner";
    } else {
        winner = (xIsnext? 'X' : 'O') + " is next move";
    }

  return (
    <>
      <div className="board-box">
        <Square handleInput={()=>handleInput(0)} value = {value[0]} />
        <Square handleInput={()=>handleInput(1)} value = {value[1]} />
        <Square handleInput={()=>handleInput(2)} value = {value[2]} />
      </div>
      <div className="board-box">
        <Square handleInput={()=>handleInput(3)} value = {value[3]} />
        <Square handleInput={()=>handleInput(4)} value = {value[4]} />
        <Square handleInput={()=>handleInput(5)} value = {value[5]} />
      </div>
      <div className="board-box">
        <Square handleInput={()=>handleInput(6)} value = {value[6]} />
        <Square handleInput={()=>handleInput(7)} value = {value[7]} />
        <Square handleInput={()=>handleInput(8)} value = {value[8]} />
      </div>

      <p>{winner}</p>
    </>
  );
}

function TicTacToe() {

    const [gameData , setGameData] = useState([Array(9).fill(null)]);
    const [xIsnext , setxIsnext] = useState(true);

    let lastGame = gameData[gameData.length - 1];

    console.log("lastGame = ", lastGame);
    function handleInput(index) {

        const copyArray = [...lastGame];
        if(copyArray[index] || calculateWinner(lastGame)){
            return;
        }
        if(xIsnext){
          copyArray[index] = 'X';
        } else {
          copyArray[index] = 'O';
        }
        
        console.log("hello = " ,index);
 
        setGameData(()=>[...gameData , copyArray])
        console.log("gameData in = " , gameData);
        setxIsnext(()=>!xIsnext);
    }

    function jumpTo(move){
        setGameData(()=>[...gameData.slice(0,move+1)]);
    }

    console.log("gameData out = " , gameData);
    let moves = gameData.map((item , move)=>{
        let description;
        if(move>0){
            description =  'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return(
        <li key={move}>
            <button onClick={()=>jumpTo(move)}>{description}</button>
        </li>
        )
        } 
    )

   return(
       <>
            <Board handleInput={handleInput} xIsnext={xIsnext} value={lastGame} /> 
            <ol>{moves}</ol>
       </>
   )
}

export default TicTacToe;
