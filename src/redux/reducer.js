/* istanbul ignore file */
import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_SCORE,
    CHANGE_TYPE,
    CHANGE_USERNAME,
  } from './actionType'

const initState = { 
  username: "",
  question_category: "",
  question_difficulty: "",
  question_type: "",
   questionsAmount: 10,
  intScore: 0,
 };

const Reducer = (state=initState, action) => {
    switch (action.type) {
      case CHANGE_CATEGORY:
        return {
          ...state,
          question_category: action.payload,
        };
      case CHANGE_DIFFICULTY:
        return {
          ...state,
          question_difficulty: action.payload,
        };
      case CHANGE_TYPE:
        return {
          ...state,
          question_type: action.payload,
        };
      case CHANGE_AMOUNT:
        return {
          ...state,
          questionsAmount: action.payload,
        };
      case CHANGE_SCORE:
        return {
          ...state,
          score: action.payload,
        };
        case CHANGE_USERNAME:
        return {
          ...state,
          username: action.payload,
        };
      default:
        return state;
        // case 'LOADING':
        //     return { ...state, location: action.payload, loading: true };
        // case 'LOAD_RESULT':
        //     return { ...state, result: action.payload, loading: false, error: false };
        // case 'SET_ERROR':
        //     return { ...state, error: action.payload, loading: false }
        // default:
        //     return initState;
    };
};

export default Reducer;
