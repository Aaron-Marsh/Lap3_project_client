import React, { useState } from 'react';
import CreateQuiz from '../../components/CreateQuiz/index';
import NumberOfQuestions from '../../components/NumberOfQuestions';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';

let Logo = require( '../../assests/logo.png')

function Setup(props) {
  const {
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    intScore,
  } = useSelector((state) => state);
  // console.log(
  //   question_difficulty,
  //   question_category,
  //   question_type,
  //   questionsAmount,
  //   intScore
  // );
  const [values, setValues] = useState({
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    intScore,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let path = (window.location.href = '/quiz');
    navigate(path);
    setValues(validate(values));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };



  const difficultyOptions = [
    { name: 'Easy', id: 'easy' },
    { name: 'Medium', id: 'medium' },
    { name: 'Hard', id: 'hard' },
  ];

  const typeOptions = [
    { name: 'multiple choice', id: 'multiple' },
    // { id: 'boolean', name: 'True/False' },
  ];
  const Categories = [
    { name: 'General Knowledge', id: 9 },
    { name: 'Books', id: 10 },
    { name: 'Films', id: 11 },
    { name: 'Music', id: 12 },
    { name: 'Musicals and Theaters', id: 13 },
    { name: 'Television', id: 14 },
    { name: 'Video Games', id: 15 },
    { name: 'Board Games', id: 16 },
    { name: 'Science and Nature', id: 17 },
    { name: 'Computer', id: 18 },
    { name: 'Mathematics', id: 19 },
    { name: 'Mythology', id: 20 },
    { name: 'Sports', id: 21 },
    { name: 'Geography', id: 22 },
    { name: 'History', id: 23 },
    { name: 'Politics', id: 24 },
    { name: 'Celebrities', id: 26 },
    { name: 'Animals', id: 27 },
    { name: 'Vehicles', id: 28 },
    { name: 'Comics', id: 29 },
    { name: 'Gadgets', id: 30 },
    { name: 'Japanese Anime', id: 31 },
    { name: 'Cartoon and Animations', id: 32 },
  ];

  return (
    <div className="main">
      <form aria-label="form"className="frame" name="sub" onSubmit={props.start}>
        <img src={Logo}/>
        <h2>START A NEW GAME</h2>
        <CreateQuiz options={Categories} label="Category" />
        <CreateQuiz options={difficultyOptions} label="Difficulty" />
        <CreateQuiz options={typeOptions} label="Type" />
        <NumberOfQuestions />
        <Box mt={3} width="50%">
          <Button className="btn" variant="contained" type="submit">
            Start Quiz
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Setup;
