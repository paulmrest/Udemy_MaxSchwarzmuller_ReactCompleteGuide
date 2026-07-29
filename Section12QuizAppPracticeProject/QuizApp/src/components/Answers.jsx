import QuestionTimer from './QuestionTimer.jsx';

export default function Answers({ answers, questionId, onChooseAnswer }) {
  return (
    <>
      <QuestionTimer questionId={questionId} timerInterval={5000} onTimeout={onChooseAnswer} />
      <ul id="answers">
        {answers.map((answer, index) => (
          <li key={questionId.concat(index)} className="answer">
            <button onClick={() => onChooseAnswer(index)}>{answer}</button>
          </li>
        ))}
      </ul>
    </>
  );
}