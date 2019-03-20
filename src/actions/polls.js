import { createAction } from 'promise-middleware-redux';
import { getPolls } from '../services/polls';

export const [
  fetchPolls,
  FETCH_POLLS,
  FETCH_POLLS_PENDING,
  FETCH_POLLS_FULFILLED,
  FETCH_POLLS_ERROR
] = createAction('FETCH_POLLS', getPolls);
