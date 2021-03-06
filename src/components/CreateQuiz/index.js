import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import './style.css';

import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from '../../redux/action';

const CreateQuiz = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (label) {
      case 'Category':
        dispatch(handleCategoryChange(e.target.value));
        break;
      case 'Difficulty':
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case 'Type':
        dispatch(handleTypeChange(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Box className="container" mt={3} width="50%">
        <FormControl size="small" fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select  data-testid="select" value={value} label={label} onChange={handleChange}>
            {options && options.map(({ id, name }) => (
              <MenuItem data-testid="select-option" value={id} key={id}>
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
