import React from 'react';
import CreateQuiz from '../../components/CreateQuiz/index';
import NumberOfQuestions from '../../components/NumberOfQuestions';
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import useAxios from '../../hooks/useAxios'

function Setup() {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  console.log(response)



  const handleSubmit = (e) => {
    e.preventDefault()
  }




  return (
    <form onSubmit={handleSubmit}>
      <CreateQuiz label="Catergory"/>
      <CreateQuiz label="Difficulty"/>
      <CreateQuiz label="Type"/>
      <NumberOfQuestions/>
      <Box mt={3} width="50%">
        <Button  variant='contained' type='submit' >
          Start Quiz
        </Button>
        
          </Box>
    </form>


  );
}

export default Setup;
