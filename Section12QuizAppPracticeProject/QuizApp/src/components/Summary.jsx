import SummaryStats from './SummaryStats.jsx';
import QuizReport from './QuizReport.jsx';

import quizComplete from '../assets/quiz-complete.png';

import QUESTIONS from '../assets/questions.js'

export default function Summary({ finishedQuiz }) {
  return (
    <div id="summary">
      <img src={quizComplete} />
      <h2>Quiz Completed!</h2>
      <SummaryStats questions={QUESTIONS} finishedQuiz={finishedQuiz} />
      <QuizReport questions={QUESTIONS} finishedQuiz={finishedQuiz} />
    </div>
  );
}