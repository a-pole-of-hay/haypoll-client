import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getQuestion, getOption, getOptions } from '../selectors/polls';
import CreatePoll from '../components/polls/CreatePoll';
import { updateQuestion, updateOption, createPoll, addOption } from '../actions/pollForm';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CreatePollContainer extends PureComponent {
  static propTypes = {
    question: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  render() {
    const { question, option, options, onChange, onAdd, onSubmit } = this.props;
    return (
      <>
      <CreatePoll
        question={question}
        options={options}
        option={option}
        onChange={onChange}
        onAdd={onAdd}
        onSubmit={onSubmit}
      />
      <Link to="/">Home</Link>
      </>
    );
  }
}

const mapStateToProps = state => ({
  question: getQuestion(state),
  option: getOption(state),
  options: getOptions(state)
  // loading: isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAdd(option) {
    event.preventDefault();
    dispatch(addOption(option));
  },

  onChange({ target }) {
    const factoryMethod = {
      question: updateQuestion,
      option: updateOption
    };
    dispatch(factoryMethod[target.name](target.value));
  },

  onSubmit(question, options, event) {
    event.preventDefault();
    dispatch(createPoll({ question, options }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePollContainer);
