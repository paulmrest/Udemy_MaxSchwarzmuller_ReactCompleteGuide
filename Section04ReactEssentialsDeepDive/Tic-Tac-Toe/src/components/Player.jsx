import { useState } from 'react';

export default function Player({ playerID, initialName, initialSymbol, isActive, onChangeName, onSymbolChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [symbol, setSymbol] = useState(initialSymbol);
  const [isEditing, setIsEditing] = useState(false);
  
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

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  function handleSymbolChange(event) {
    let newSymbol = event.target.value;
    /*
    Intl.Segmenter is generally compatible with 2024 and newer browsers.
    See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter

    Getting an accurate character count of an emoji string is not simple without Intl Segmenter.
    Array.from(string) works (https://stackoverflow.com/a/54370584/2149946) sometimes, but not always.
    
    For older browsers Graphemer (https://github.com/flmnt/graphemer) sounds like the best solution,
    although I didn't actually try using it.
    */
    const newSymbolArray = [...new Intl.Segmenter().segment(newSymbol)].map(x => x.segment);
    if (newSymbolArray.length > 1) {
      alert("Player symbol length too long.")
    } else {
      setSymbol(event.target.value);
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let editableSymbol = <span className="player-symbol">{symbol}</span>;
  if (isEditing) {
    editablePlayerName = <input className="player-name-input" type="text" required value={playerName} 
                  onChange={handleNameChange} />
    editableSymbol = <input className="player-symbol-input" type="text" required value={symbol}
                  onChange={handleSymbolChange}/>
  }

  return (
          <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              {editableSymbol}
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
  );
}