import { useState, useEffect } from 'react';

export default function QuestionTimer({ questionId, timerInterval, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timerInterval);

  useEffect(() => {
    setRemainingTime(timerInterval);
  }, [questionId])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);
    
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setRemainingTime(timerInterval);
      onTimeout(null);
    }, timerInterval);

    return () => {
      clearTimeout(timerId);
    }
  }, [questionId]);

  return (
    <progress id="question" value={remainingTime} max={timerInterval} />
  );
}