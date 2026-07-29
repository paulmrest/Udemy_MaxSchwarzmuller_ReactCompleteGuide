import UserInput from './UserInput.jsx';
import { LABELS_TEXT } from '../util/labels.js';

export default function UserInputGroup({currentValues, onUserInputChange, firstValueProp, secondValueProp}) {
  return (
      <div className="input-group">
        <UserInput
          onUserInputChange={onUserInputChange}
          labelText={LABELS_TEXT[firstValueProp]}
          propName={firstValueProp}
          currentValues={currentValues}
        />
        <UserInput
          onUserInputChange={onUserInputChange}
          labelText={LABELS_TEXT[secondValueProp]}
          propName={secondValueProp}
          currentValues={currentValues}
        />
      </div>
  );
}