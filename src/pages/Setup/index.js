import React from 'react';
import CreateQuiz from '../../components/CreateQuiz/index';
import { Box } from '@mui/system'
import { Button } from '@mui/material'

function Setup() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }




  return (
    <form onSubmit={handleSubmit}>
      <CreateQuiz label="Catergory"/>
      <CreateQuiz label="Difficulty"/>
      <CreateQuiz label="Type"/>
      <Box mt={3} width="50%">
        <Button fullwidth variant='contained' type='submit' >
          Start Quiz
        </Button>
        
          </Box>
    </form>


  );
}

export default Setup;
