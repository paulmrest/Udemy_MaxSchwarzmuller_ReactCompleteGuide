export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((player, colIndex) => (
              <li key={colIndex}>
                <button 
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={player !== null}
                >
                  {player && player.playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}