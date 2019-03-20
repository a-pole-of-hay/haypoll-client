import {
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED,
  CREATE_POLL_ERROR,
  // UPDATE_OPTION,
  // UPDATE_QUESTION,
  // ADD_OPTION,
  createPoll
} from '../actions/polls';

describe('polls action', () => {
  it('create a POLL action', () => {
    const action = createPoll({});
    expect(action).toEqual({
      type: CREATE_POLL,
      pendingType: CREATE_POLL_PENDING,
      fulfilledType: CREATE_POLL_FULFILLED,
      rejectedType: CREATE_POLL_ERROR,
      payload: expect.any(Promise)
    });
  });
});
