import { 
  UPDATE_OPTION, 
  UPDATE_QUESTION, 
  ADD_OPTION, 
  CREATE_POLL, 
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED
} from '../actions/polls';
import reducer from './polls';

describe('polls reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      polls: [],
      options: [],
      option: '',
      question: ''
    };
  });
  it('can handle the CREATE_POLL action', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL,
      payload: {
        question: 'Favorite color?',
        options: ['blue', 'purple', 'pink'],
        user: '1234'
      }
    });

    expect(updatedState).toEqual({
      ...state,
      polls: [{ 
        question: 'Favorite color?',
        options: ['blue', 'purple', 'pink'],
        user: '1234' 
      }]
    });
  });

  it('can handle CREATE POLL PENDING', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL_PENDING
    });

    expect(updatedState).toEqual({
      ...state,
      loading: true
    });
  });

  it('can handle the CREATE POLL FULFILLED ACTION', () => {
    const updatedState = reducer(state, {
      type: CREATE_POLL_FULFILLED
    });

    expect(updatedState).toEqual({
      ...state,
      loading: false
    });
  });

  it('can handle the UPDATE QUESTION action', () => {
    const updatedState = reducer(state, {
      type: UPDATE_QUESTION,
      payload: 'Question?'
    });

    expect(updatedState).toEqual({
      ...state,
      question: 'Question?'
    });
  });

  it('can handle the UPDATE OPTION action', () => {
    const updatedState = reducer(state, {
      type: UPDATE_OPTION,
      payload: 'option'
    });

    expect(updatedState).toEqual({
      ...state,
      option: 'option'
    });
  });

  it('can handle the ADD OPTION action', () => {
    const updatedState = reducer(state, {
      type: ADD_OPTION,
      payload: 'OPTION ADD'
    });

    expect(updatedState).toEqual({
      ...state,
      options: ['OPTION ADD']
    });
  });
});
