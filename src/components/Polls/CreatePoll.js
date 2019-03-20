import React from 'react';
import PropTypes from 'prop-types';

class CreatePoll extends React.PureComponent {
  static propTypes =  {
    question: PropTypes.string.isRequired,
    option: PropTypes.string. isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onPost: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { question, option, options, onChange, onAdd, onPost, onSubmit } = this.props;
    return (
      <>
        <h2> Create a Poll</h2>
        <form onSubmit={onPost}>
          <input type="text" value={question} name="question" onChange={onChange}/>
          <input type="text" value={option} name="option" onChange={onChange}/>
          <button type="button" onClick={onAdd.bind(null, option)}>Add</button>
          <button type="submit" onClick={onSubmit.bind(null, question, options)}>Submit</button>
        </form>
      </>
    );
  }
} 

export default CreatePoll;
