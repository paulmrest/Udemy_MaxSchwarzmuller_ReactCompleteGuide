export default function UserInput({onUserInputChange, labelText, propName, currentValues}) {
  function handleValueChange(propName, newValue) {
    let numValue = 0;
    if (newValue || newValue !== '') {
      numValue = parseFloat(newValue);
    }
    if (isNaN(numValue)) {
      alert("Value is not a number.");
    } else {
      onUserInputChange(propName, numValue);
    }
  }

  return (
      <span>
        <label>{labelText}</label>
        <input
          onChange={(event) => handleValueChange(propName, event.target.value)}
          id={propName}
          type="number"
          min="0"
          required
          value={currentValues[propName] !== 0 ? currentValues[propName] : ''}>
        </input>
      </span>
  );
}