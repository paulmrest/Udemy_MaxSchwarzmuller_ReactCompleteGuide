import UserInputGroup from './UserInputGroup.jsx';

export default function UserInputBackground({currentValues, onUserInputChange}) {
  return (
      <div id="user-input">
        <br/>
          <UserInputGroup
            currentValues={currentValues}
            onUserInputChange={onUserInputChange}
            firstValueProp={Object.keys(currentValues)[0]}
            secondValueProp={Object.keys(currentValues)[1]}
          />
        <br/>
        <br/>
          <UserInputGroup
            currentValues={currentValues}
            onUserInputChange={onUserInputChange}
            firstValueProp={Object.keys(currentValues)[2]}
            secondValueProp={Object.keys(currentValues)[3]}
          />
        <br/>
      </div>
  );
}