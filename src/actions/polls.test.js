import {
  FETCH_POLLS,
  FETCH_POLLS_ERROR,
  FETCH_POLLS_FULFILLED,
  FETCH_POLLS_PENDING,
  fetchPolls
} from './polls';

describe('polls actions', () => {
  const polls = [
    { question: 'question', options: ['a', 'b', 'c'] }
  ];

  it('fetches polls action', () => {
    const action = fetchPolls(polls);
    expect(action).toEqual({
      type: FETCH_POLLS,
      pendingType: FETCH_POLLS_PENDING,
      fulfilledType: FETCH_POLLS_FULFILLED,
      rejectedType: FETCH_POLLS_ERROR,
      payload: expect.any(Promise)
    });
  });
});
