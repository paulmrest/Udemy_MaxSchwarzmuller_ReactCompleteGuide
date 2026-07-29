export default function deriveQuizStats(questions, finishedQuiz) {
  let stats = {
    totalSkipped: 0,
    totalCorrect: 0,
    totalIncorrect: 0
  };
  questions.forEach(question => {
    const matchingQuestionAnswer = finishedQuiz.find(questionAnswer => {
      return question.id === questionAnswer.questionId;
    });
    if (matchingQuestionAnswer) {
      let propName;
      if (matchingQuestionAnswer.answerIndex === 0) {
        propName = "totalCorrect";
      } else if (matchingQuestionAnswer.answerIndex === null) {
        propName = "totalSkipped";
      } else {
        propName = "totalIncorrect";
      }
      stats = {
        ...stats,
        [propName]: stats[propName] + 1
      };
    }
  });
  return stats;
}

export function deriveQuizReport(questions, finishedQuiz) {
  let quizReport = [];
  finishedQuiz.forEach((quizQA) => {
    const matchingQuestion = questions.find((question) => {
      return question.id === quizQA.questionId;
    });
    if (matchingQuestion) {
      let answerClassName;
      if (quizQA.answerIndex === 0) {
        answerClassName = "correct";
      } else if (quizQA.answerIndex === null) {
        answerClassName = "skipped";
      } else {
        answerClassName = "wrong";
      }
      quizReport.push({
        question: matchingQuestion.text,
        answer: matchingQuestion.answers[quizQA.answerIndex],
        answerClassName: answerClassName
      });
    }
  });
  return quizReport;
}