import { connect } from 'react-redux';
import { getQuestion, getOption, getOptions } from '../selectors/polls';
import CreatePoll from '../components/polls/CreatePoll';
import { updateQuestion, updateOption, createPoll, addOption } from '../actions/polls';

const mapStateToProps = state => ({
  question: getQuestion(state),
  option: getOption(state),
  options: getOptions(state)
  // loading: isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAdd(option) {
    event.preventDefault();
    // console.log(event);
    dispatch(addOption(option));
  },
  
  onChange({ target }) {
    const factoryMethod = {
      question: updateQuestion,
      option: updateOption
    };
    dispatch(factoryMethod[target.name](target.value));
  },

  onPost(event) {
    event.preventDefault();
  },

  onSubmit(question, options, event) {
    event.preventDefault();
    dispatch(createPoll(question, options));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePoll);
