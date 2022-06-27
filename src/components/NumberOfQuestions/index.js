import React from 'react'
import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";

const NumberOfQuestions = () => {
    const handleChange = () => {}



  return (
    <Box mt={3} width="50%">
    <FormControl fullWidth size="small">
      <TextField
        onChange={handleChange}
        variant="outlined"
        label="Amount of Questions"
        type="number"
        size="small"
      />
    </FormControl>
  </Box>
  )
}

export default NumberOfQuestions