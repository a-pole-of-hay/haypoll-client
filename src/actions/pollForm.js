import { createAction } from 'promise-middleware-redux';
import { postPoll } from '../services/polls';

export const [
  createPoll,
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED,
  CREATE_POLL_ERROR
] = createAction('CREATE_POLL', postPoll);

export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  payload: question
});

export const UPDATE_OPTION = 'UPDATE_OPTION';
export const updateOption = option => ({
  type: UPDATE_OPTION,
  payload: option
});

export const ADD_OPTION = 'ADD_OPTION';
export const addOption = option => ({
  type: ADD_OPTION,
  payload: option
});
