import { useState } from 'react';

import Question from './Question.jsx';
import Answers from './Answers.jsx';
import Summary from './Summary.jsx';

import QUESTIONS from '../assets/questions.js';

export default function Quiz() {
  const [quizState, setQuizState] = useState(
    {
      currQuestionIndex: 0,
      answeredQuestions: []
    }
  );

  function handleChooseAnswer(answerIndex) {
      setQuizState((prevQuizState) => {
        const newQuizState = {
          ...prevQuizState,
          currQuestionIndex: prevQuizState.currQuestionIndex + 1,
          answeredQuestions: [...prevQuizState.answeredQuestions, {
            questionId: QUESTIONS[prevQuizState.currQuestionIndex].id,
            answerIndex: answerIndex
          }]
        };
        return newQuizState;
      });
  }

  const quizFinished = quizState.currQuestionIndex > QUESTIONS.length - 1;

  return (
    <div id="quiz">
      {!quizFinished &&
        <>
          <Question question={QUESTIONS[quizState.currQuestionIndex]} />
          <Answers
            answers={QUESTIONS[quizState.currQuestionIndex].answers}
            questionId={QUESTIONS[quizState.currQuestionIndex].id}
            onChooseAnswer={handleChooseAnswer}
          />
        </>
      }
      {quizFinished &&
        <Summary finishedQuiz={quizState.answeredQuestions} />
      }
    </div>
  );
}