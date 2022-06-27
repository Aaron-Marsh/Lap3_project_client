import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';

const CreateQuiz = (props) => {
  const { label, options } = props;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Box mt={3} width="50%">
        <FormControl size="small" fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select value={value} label={label} onChange={handleChange}>
            {options.map(({ id, name }) => (
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default CreateQuiz;
