import Stat from './Stat.jsx';

import deriveQuizStats from '../assets/utility.js';

export default function SummaryStats({ questions, finishedQuiz }) {
  const derivedStats = deriveQuizStats(questions, finishedQuiz);
  return (
    <div id="summary-stats">
      <Stat name={"Skipped"} value={Math.round((derivedStats.totalSkipped / questions.length) * 100)} />
      <Stat name={"Answered Correctly"} value={Math.round((derivedStats.totalCorrect / questions.length) * 100)} />
      <Stat name={"Answered Incorrectly"} value={Math.round((derivedStats.totalIncorrect / questions.length) * 100)} />
    </div>
  );
}