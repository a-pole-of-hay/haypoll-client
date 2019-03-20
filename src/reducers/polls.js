import {
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_ERROR,
  UPDATE_OPTION,
  UPDATE_QUESTION,
  ADD_OPTION
} from '../actions/polls';

const initialState = {
  loading: false,
  error: null,
  polls: [],
  options: [],
  option: '',
  question: '',
  user: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_POLL:
      return {
        ...state,
        polls: [...state.polls, payload],
        loading: false
      };
    case CREATE_POLL_PENDING:
      return { 
        ...state, 
        loading: true 
      };
    case CREATE_POLL_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        question: payload
      };
    case UPDATE_OPTION:
      return {
        ...state,
        option: payload
      };
    case ADD_OPTION:
      return {
        ...state,
        options: [...state.options, payload]
      };
    default:
      return state;
  }
}
