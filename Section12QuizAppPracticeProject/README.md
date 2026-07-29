# Section 12 - Quiz App Practice Project

## Project Spec

The spec supplied for this practice project ([link](https://github.com/unsivilaudio/acad-learning/blob/2c34891f9d19d785af500655b0a02431a872b7eb/Project%20Quiz.md)):

```
# Project Quiz

## Tasks

1. **Build Quiz component**
   - should handle all the state of your quiz application
   - should iterate through the quiz questions
   - display a results screen when all quiz questions have been exhausted
1. **Build a Question component**
   - displays the main question text
   - displays an list of answers (Answers component)
     <br />
     _[optional][advanced]_
     - give each question a limited amount of time for the user to answer before skipping the question (save 'null' result for user answer)
     - abstract timer logic to its own component called QuestionTimer
1. **Build an Answers component**
   - displays a list of clickable answers
   - implement when an answer is selected will move to the next question in the list
1. **Build a Summary component**
   - should be shown (in the Quiz component) when all answers in the quiz have been exhausted
   - iterate through the answers, and display the question text, and the user answer
   - user answer should reflect if correct (green), incorrect (red), or "skipped", not-answered (white)
     - [optional] - should show 3 statistics (in percentage), "skipped" (no answer), "correct", "incorrect"
1. [optional] - **Build a Header component**
   - should be displayed at the top of your page

#### Hints

- you will need to handle lifting state up through (sometimes multiple) components to keep your application state in the Quiz component
- you can use the questions length to calculate your statistics (the results below are multiplied by 100 to give us a percentage)
  - num-of-correct / questions.length x 100
  - num-of-incorrect / questions.length x 100
  - num-of-skipped / questions.length x 100
- minimize your state values in Quiz, and derive as much of your application values as possible
- don't forget to properly memoize any functions/values you might need to reference in effect dependency arrays
  - useCallback for functions
  - useMemo for values
```
Is unfortunately incorrect. It may simply be out of date, or it might be that the TA wanted to give students a simplified version of the project.

The above spec reflects what I built, however, I also went ahead and updated the spec to reflect what the instructor, Max, actually builds in this section:

```
# Project Quiz - Version Max Builds

## Tasks

1. **Build a Header component**
   - Will display the "quiz.logo.png" file found in /assets.
   - Will display "REACTQUIZ" header text.
1. **Build a Quiz component**
   - Potentially will handle all the state(s) of the application, but likely will at least handle the primary state of the application.
   - Will iterate through the questions.
   - Will Display a result/summary screen after all questions have been answered or skipped.
1. **Build a Question component**
   - Will display each question.
   - Will display a list of answers.
   - Will display a timer that gives the user a limited time to select an answer (Max uses 10 seconds), after which the app advances to the next question.
1. **Build an Answers component**
   - Will display a list of clickable answers in a shuffled and random order.
   - When an answer is clicked:
      - Clicked button formatting is changed to show it was selected.
      - The other buttons are no longer clickable and their formatting reflects this.
      - QuestionTimer is started over and displays a shorter timer (Max uses 2 seconds). 
      - At the end of that first shorter timer, the formatting of the selected answer is changed to show whether it was correct or incorrect, and QuestionTimer is again started over and displays an even shorter timer (Max uses 1 second). 
      - At the end of that third, shortest, QuestionTimer timer, app records whether the selected answer was correct or incorrect and advances to the next question.
1. **Build a QuestionTimer component**
   - Will show a progress bar for the current timer.
   - Timers can be one of three (See Answers component spec):
      - Timer to select an answer (Max uses 10 seconds).
      - Timer to countdown to showing whether selected answer is in/correct (Max uses 2 seconds).
      - Timer to countdown moving to the next question when showing whether the selected answer is in/correct (Max uses 1 second).
1. **Build a Summary component**
   - Will display when all the questions have been answered or skipped.
   - Will iterate through the user answers to do the following:
      - Show percentages of the questions skipped, answered correctly, and answered incorrectly. Percentages are rounded to the nearest integer value.
      - Show a list of questions and which answer the user chose; if the user skipped that question, show the text "Skipped". Each list item should have a number showing which question/answer it in the sequence (the number "1" for the 1st question/answer, etc).
      - Conditionally format answer text to show whether the question was answered correctly (green), incorrectly (red), or skipped (white).
1. **Additional Info/Hints**
   - JS file with questions and answers can be found here: https://github.com/academind/react-complete-guide-course-resources/blob/a5c42661524ffc2a2e6e87104db9724376876034/attachments/13%20Demo%20Project%20-%20React%20Quiz/questions.js
   - The first answer (index 0) is always the correct answer. Thus the importance of shuffling the answers as shown to the user.
   - Every component has a built in "key" prop that, when you assign a value to it, and the value changes in the parent component, causes the component to be recreated.
```