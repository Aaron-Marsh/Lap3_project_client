import React from 'react';
import CreateQuiz from '../../components/CreateQuiz/index';

function Setup() {
  return (
    <form>
      <CreateQuiz label="Catergory"/>
      <CreateQuiz label="Difficulty"/>
      <CreateQuiz label="Type"/>
    </form>


  );
}

export default Setup;
