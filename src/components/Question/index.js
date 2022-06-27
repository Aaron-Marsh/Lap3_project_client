import { useSelect } from '@mui/base';
import react, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import useAxios from '../../hooks/useAxios';
const socket = io('http://localhost:4000');

io({ query: { name: 'Sally' } });

socket.emit('start', { category: 2, difficulty: 'easy', questionsAmount: 12 });
let questionData = { category: 'blank' };

socket.on('ready', (data) => {
  questionData = data;
  console.log(questionData);
});

const Question = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        intScore,
    } = useSelector(state => state)
    console.log(amount_of_question)





  let apiUrl = `/api.php?amount=10`;
  const { response, loading } = useAxios({ url: apiUrl });
  console.log(response);









  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(questionData);

  useEffect(() => {
    setQuestions(questionData);
  });

  const newQuestion = (e) => {
    e.preventDefault();
    socket.emit('retrieveQuestion', { questionScore: score });
    setQuestions(questionData);
  };

  const listAnswers = () => {};

  // useEffect(() => {
  //     socket.on('noQuestionsLeft', (data) => {
  //         console.log('data'+data.score)
  //     })
  // })

  return (
    <>
      <h2>Questions</h2>
      <h3>{questions.question}</h3>
      <ul>
        <li>{questions.correct_answer}</li>
      </ul>

      <button onClick={newQuestion}>hello</button>
    </>
  );
};

export default Question;
