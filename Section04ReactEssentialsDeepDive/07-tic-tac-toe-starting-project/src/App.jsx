import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

import { WINNING_COMBINATIONS } from './winning-combinations.js';

const PLAYERS = [
  {playerID: 1, playerName: 'Player 1', playerSymbol: 'X'},
  {playerID: 2, playerName: 'Player 2', playerSymbol: 'O'}
];

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 1;
  if (gameTurns.length > 0 && gameTurns[0].player.playerID === 1) {
    currentPlayer = 2;
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameTurns, gameBoard) {
  if (gameTurns.length < 5) {
    return null;
  }
  const lastSelectedSquare = gameTurns[0];
  if (checkGridForWin(lastSelectedSquare.player.playerID, gameBoard, lastSelectedSquare.square.row, lastSelectedSquare.square.col)) {
    return lastSelectedSquare.player;
  }
}

function checkGridForWin(playerID, gameBoard, rowIndex, colIndex) {
  const verticalWinningPattern = 1 + gridMarcher(playerID, gameBoard, rowIndex - 1, colIndex, -1, 0) +
                                  gridMarcher(playerID, gameBoard, rowIndex + 1, colIndex, 1, 0);
  const horizontalWinningPattern = 1 + gridMarcher(playerID, gameBoard, rowIndex, colIndex - 1, 0, -1) +
                                  gridMarcher(playerID, gameBoard, rowIndex, colIndex + 1, 0, 1);
  const ascendingWinningPattern = 1 + gridMarcher(playerID, gameBoard, rowIndex + 1, colIndex - 1, 1, -1) +
                                  gridMarcher(playerID, gameBoard, rowIndex - 1, colIndex + 1, -1, 1);
  const descendingWinningPattern = 1 + gridMarcher(playerID, gameBoard, rowIndex - 1, colIndex - 1, -1, -1) +
                                  gridMarcher(playerID, gameBoard, rowIndex + 1, colIndex + 1, 1, 1); 
  return verticalWinningPattern === 3 || horizontalWinningPattern === 3 || 
          ascendingWinningPattern === 3 || descendingWinningPattern === 3;
}

function gridMarcher(playerID, gameBoard, rowIndex, colIndex, deltaRow, deltaColumn) {
  if (!gameBoard[rowIndex]?.[colIndex] || gameBoard[rowIndex][colIndex].playerID != playerID) {
    return 0;
  } else {
    return 1 + gridMarcher(playerID, gameBoard, rowIndex + deltaRow, colIndex + deltaColumn, deltaRow, deltaColumn);
  }
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayerID = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameTurns, gameBoard);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayerID = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: players.find(x => x.playerID === currentPlayerID) },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerID, newName) {
    setPlayers(prevPlayers => {
      for (const player of prevPlayers) {
        if (player.playerID === playerID) {
          player.playerName = newName;
          break;
        }
      }
      return prevPlayers;
    });
  }

  function handlePlayerSymbolChange(playerID, newSymbol) {
    setPlayers(prevPlayers => {
      for (const player of prevPlayers) {
        if (player.playerID === playerID) {
          player.playerSymbol = newSymbol;
          break;
        }
      }
      if (gameTurns.length > 0) {
        setGameTurns(prevGameTurns => {
          return [...prevGameTurns];
        });
      }
      return prevPlayers;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerID={PLAYERS[0].playerID}
            initialName={PLAYERS[0].playerName}
            initialSymbol={PLAYERS[0].playerSymbol}
            isActive={activePlayerID === PLAYERS[0].playerID}
            onChangeName={handlePlayerNameChange}
            onSymbolChange={handlePlayerSymbolChange}
          />
          <Player
            playerID={PLAYERS[1].playerID}
            initialName={PLAYERS[1].playerName}
            initialSymbol={PLAYERS[1].playerSymbol}
            isActive={activePlayerID === PLAYERS[1].playerID}
            onChangeName={handlePlayerNameChange}
            onSymbolChange={handlePlayerSymbolChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner?.playerName} onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App