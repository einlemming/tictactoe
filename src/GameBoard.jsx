
export default function GameBoard( {onSelectSquare, board}) {
  
// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleSelectSquare(rowIndex, colIndex) {

//     setGameBoard((prevGameBoard) => {
//         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedBoard;
//       });

//       onSelectSquare();
// }

// map() on an array is a NEW array. 
// Every element of this array is processed by the callback function provided to the map itself.
// map is another of cycling through arrays

return (
    <ol id="game-board">
      {board.map((row, rowIndex) => ( 
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                 <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                 </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
   
   