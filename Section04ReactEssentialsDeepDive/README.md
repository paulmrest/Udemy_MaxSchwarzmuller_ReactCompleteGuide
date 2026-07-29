# Section 04 - React Essentials

## Tic-Tac-Toe Starting Project (07-tic-tac-toe-starting-project)

Original finished project can be found here: [04 Essentials Deep Dive / 07-tic-tac-toe-starting-project](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/18-finished)

There were a few things I didn't like about the project and changed:

- Magic strings. In the App.jsx components the two players were defined using this object:
  
      {
      const PLAYERS = {
        X: 'Player 1',
        O: 'Player 2'
      };
  Which then necessitated using magic strings when differentiating between the two players (example, but not the only place):
  
      <Player
        initialName={PLAYERS.X}
        symbol="X"
        isActive={activePlayer === 'X'}
        onChangeName={handlePlayerNameChange}
      />
      <Player
        initialName={PLAYERS.O}
        symbol="O"
        isActive={activePlayer === 'O'}
        onChangeName={handlePlayerNameChange}
      />  
  By swapping to an array of player objects with unique IDs:

      const PLAYERS = [
        {playerID: 1, playerName: 'Player 1', playerSymbol: 'X'},
        {playerID: 2, playerName: 'Player 2', playerSymbol: 'O'}
      ];

  We avoid the magic strings and add additional functionality (see next entry).

- Being able to customize the player symbol used on the board. Previously we were locked into using "X" and "O" for the player symbols, but with the
  change to using a playerID, we can now set any (one character) symbol we like, including emojis. JS added [Intl Segmenter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter),
  compatible with most browsers 2024 or newer, which simplifies handling emoji character counts.

  The same "Edit" and "Save" button that allows the user to modify their player name also allows them to change their symbol.

  Board rerenders when changing the player symbol with the new character symbol with this added logic in App.jsx's <code>handlePlayerSymbolChange()</code>:

        if (gameTurns.length > 0) {
        setGameTurns(prevGameTurns => {
          return [...prevGameTurns];
        });
      }
  
- Log improved. Added symbol and cleaned up formatting.

- Bug allowing setting blank player names and symbols fixed in Player.jsx's <code>handleEditClick()</code>:

      function handleEditClick() {
        if (!playerName || playerName === '' || !symbol || symbol === '') {
          alert("Neither player name nor symbol can be blank.");
        } else {
          setIsEditing((editing) => !editing);
          if (isEditing) {
            onChangeName(playerID, playerName);
            onSymbolChange(playerID, symbol);
          }
        }
      }
  
- Issues:
  - Player objects in <code>PLAYERS</code> array have settable playerID properties. Switching to strict mode and using Object.defineProperities or
    Object.defineProperty would resolve this, but I didn't do that here as this is a learning project.