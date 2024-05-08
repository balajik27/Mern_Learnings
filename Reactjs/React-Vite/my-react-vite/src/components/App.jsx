import '../assets/css/style.css'
import { useState } from 'react';
function Square({value , onClickSquare}) {
  return (
    <>
      <div className="square" onClick={onClickSquare} >{value}</div>
    </>
  );
}

function Board({xSquare , onPlay , squares}) {

  // const [squares , setSquares] = useState(Array(9).fill(null));
 
 
  const handleClick = (i)=>{
    const copyArray = [...squares];
    if(copyArray[i] ||  calculateWinner(squares)){
      return;
    }
    
    if(xSquare){
      copyArray[i] = 'X';
    } else {
      copyArray[i] = 'O';
    }
    onPlay(copyArray);
    // setSquares(copyArray); // re-render both parent and every child component (eg: App and Square)
    // setXsqare(!xSquare);
  }
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner is " + winner;
  } else {
    status = "Next Player is " + (xSquare? "X":"O");
  }

  return (
    <>
      <div className='board-box'>
        <Square onClickSquare = {()=>handleClick(0)} value={squares[0]} />
        <Square onClickSquare = {()=>handleClick(1)} value={squares[1]} />
        <Square onClickSquare = {()=>handleClick(2)} value={squares[2]} />
      </div>
      <div className='board-box'>
        <Square onClickSquare = {()=>handleClick(3)} value={squares[3]} />
        <Square onClickSquare = {()=>handleClick(4)} value={squares[4]} />
        <Square onClickSquare = {()=>handleClick(5)} value={squares[5]} />
      </div>
      <div className='board-box'>
        <Square onClickSquare = {()=>handleClick(6)} value={squares[6]} />
        <Square onClickSquare = {()=>handleClick(7)} value={squares[7]} />
        <Square onClickSquare = {()=>handleClick(8)} value={squares[8]} />
      </div>

      <p>{status}</p>
    </>
  );
}


function Game(){
  // const [xSquare , setXsqare] = useState(true);
  const [history , setHistory] = useState([Array(9).fill(null)]);
  
  const [currentMove, setCurrentMove] = useState(0); // which step the user is currently viewing
  const xSquare = currentMove % 2 === 0;

  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];
  //you will modify the Game component to render the currently selected move, instead of always rendering the final move


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setHistory([...history, nextSquares]);
    // setXsqare(!xSquare);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXsqare(nextMove % 2 === 0);
  }

  const moves = history.map((squares , move)=>{
    let description;
    if(move>0){
      description =  'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return(
      <li key={move}>
        <button onClick={() => jumpTo(move)} >{description}</button>
      </li>
    )
  })


  return(
    <>
      <div className="game">
        <div className="game_board">
          <Board  xSquare = {xSquare} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game_info">
        <ol>{moves}</ol>
        </div>
      </div>
    </>
  )
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i=0;i<lines.length;i++){
    const [a , b , c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;

}

export default Game;
