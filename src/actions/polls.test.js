import {
  CREATE_POLL,
  CREATE_POLL_PENDING,
  CREATE_POLL_FULFILLED,
  CREATE_POLL_ERROR,
  UPDATE_OPTION,
  UPDATE_QUESTION,
  ADD_OPTION,
  updateOption,
  addOption,
  createPoll,
  updateQuestion
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

  it('UPDATE OPTION', () => {
    const action = updateOption('a');

    expect(action).toEqual({
      type: UPDATE_OPTION,
      payload: 'a'
    });
  });

  it('UPDATE QUESTION', () => {
    const action = updateQuestion('How are you?');

    expect(action).toEqual({
      type: UPDATE_QUESTION,
      payload: 'How are you?'
    });
  });

  it('ADD OPTION', () => {
    const action = addOption('great!');

    expect(action).toEqual({
      type: ADD_OPTION,
      payload: 'great!'
    });
  });
});
