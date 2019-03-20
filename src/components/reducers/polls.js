import { CREATE_POLL, CREATE_POLL_PENDING, CREATE_POLL_ERROR } from '../actions/polls';

const initialState = {
  loading: false,
  error: null,
  polls: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POLL:
      return { ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case CREATE_POLL_PENDING:
      return { ...state, loading: true };
    case CREATE_POLL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
  }
}
