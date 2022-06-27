import React from 'react';
import CreateQuiz from '../../components/CreateQuiz/index';
import NumberOfQuestions from '../../components/NumberOfQuestions';
import { Box } from '@mui/system'
import { Button, CircularProgress, Typography } from '@mui/material'
import useAxios from '../../hooks/useAxios'

function Setup() {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  // console.log(response)

  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress/>
      </Box>
    )
  }


  if(error) {
    return (

        <Typography variant='h6' my={20} color="red">
          Something went wrong
        </Typography>
     
    )
  }





  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const difficultyOptions = [
    {id: 'easy', name:"Easy"},
    {id: 'medium', name:"Medium"},
    {id: 'hard', name:"Hard"}
  ]

  const typeOptions = [
    {id: "multiple", name: "multiple choice"},
    {id: "boolean", name: "True/False"}
  ]



  return (
    <form onSubmit={handleSubmit}>
      <CreateQuiz options={response.trivia_categories}label="Catergory"/>
      <CreateQuiz options={difficultyOptions} label="Difficulty"/>
      <CreateQuiz options={typeOptions} label="Type"/>
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
