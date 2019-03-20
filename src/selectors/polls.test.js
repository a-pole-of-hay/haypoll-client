import { 
  getOption,
  getOptions, 
  getPolls, 
  getQuestion, 
  isLoading 
} from './polls';
import { stat } from 'fs';

describe('polls selector', () => {
  let state;
  beforeEach(() => {
    state = {
      polls: {
        loading: false,
        polls: [{ question: 'hello?', options: ['a', 'b', 'c'] }],
        options: ['a', 'b', 'c'],
        option: 'a',
        question: 'hello?'
      }
    };
  });

  it('can get option from state', () => {
    const option = getOption(state);

    expect(option).toEqual('a');
  });

  it('can get options from state', () => {
    const options = getOptions(state);

    expect(options).toEqual(['a', 'b', 'c']);
  });

  it('can get a question from state', () => {
    const question = getQuestion(state);

    expect(question).toEqual('hello?');
  });

  it('can get polls from state', () => {
    const polls = getPolls(state);

    expect(polls).toEqual([{ question: 'hello?', options: ['a', 'b', 'c'] }]);
  });

  it('can get loading from state', () => {
    const loading = isLoading(state);

    expect(loading).toBeFalsy();
  });
});

