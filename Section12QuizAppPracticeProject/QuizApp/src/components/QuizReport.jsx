import { deriveQuizReport } from '../assets/utility.js';

export default function QuizReport({ questions, finishedQuiz }) {
  const quizReport = deriveQuizReport(questions, finishedQuiz);
  return (
    <ol>
      {quizReport.map((quizQA, index) => (
        <li>
          <h3>{index + 1}</h3>
          <p className="question">
            {quizQA.question}
          </p>
            <p className={`user-answer ${quizQA.answerClassName}`}>
              {quizQA.answer ? quizQA.answer : "Question Skipped - N/A"}
            </p>
        </li>
      ))}
    </ol>
  );
}