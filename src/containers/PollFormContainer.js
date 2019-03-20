import { connect } from 'react-redux';
import { getQuestion, getOption } from '../selectors/polls';
import CreatePoll from '../components/polls/CreatePoll';
import { updateQuestion, updateOption, createPoll } from '../actions/polls';

const mapStateToProps = state => ({
  question: getQuestion(state),
  option: getOption(state)
  // options: getOptions(state),
  // loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      question: updateQuestion,
      option: updateOption
    };
    dispatch(factoryMethod[target.name](target.value));
  },

  onSubmit(question, option, event) {
    console.log('event', event);
    event.preventDefault();
    dispatch(createPoll(question, option));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePoll);
