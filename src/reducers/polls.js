import {
  FETCH_POLLS,
  FETCH_POLLS_ERROR,
  FETCH_POLLS_PENDING
} from '../actions/polls';

const initialState = {
  loading: false,
  error: null,
  polls: [],
  user: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    
    case FETCH_POLLS:
      return {
        ...state,
        polls: payload
      };
    case FETCH_POLLS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_POLLS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
