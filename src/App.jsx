import Player from './components/Player.jsx';
import GameBoard from './GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null,  null],
  [null, null,  null],
  [null, null,  null],
];

function deriveActivePlayer(gameTurns) { // outside App, no need to state update, doesnt need to be recreated
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function deriveGameBoard(gameTurns) {
  
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]; // DEEP COPY BY VALUE

  for (const turn of gameTurns) {
    const {square, player} = turn; // Array destructuring
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;}
function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    // Wenn in denen überall 'X' oder 'O' drinsteht (also z.B. row0 und col0,1,2 == 'X' oder 'O')
    if (
      firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      secondSquareSymbol === thirdSquareSymbol
    ) {
      //winner = firstSquareSymbol; // 'X' oder 'O'
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}
function App() {
  const [players, setPlayers]= useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]); // empty array value in useState
  //const [hasWinner, setHasWinner] = useState(false);
  //const [activePlayer, setActivePlayer] = useState('X');  // can be drived from gameTurns
 
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
    const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex}, player: currentPlayer }, 
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
        return {
          ...prevPlayers,
        [symbol]: newName
      };
    });
  }
  return <main>
    <div className="image-container">
      <img className="game-logo" src={`${import.meta.env.BASE_URL}game-logo.png`} alt="Description" />
    </div>
    <div className="image-container">
    <h1>Tic-Tac-Toe</h1>
    </div>
    <div id="game-container">
      <ol id="players" className="highlight-player">     
        <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
        <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      <GameBoard 
        onSelectSquare={(handleSelectSquare)}
        board={gameBoard}
      />
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default App
