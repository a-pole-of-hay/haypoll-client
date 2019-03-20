import React from 'react';
import PropTypes from 'prop-types';

export default function CreatePoll({ question, option, onChange, onSubmit }) {
  return (
    <>
      <h2> Create a Poll</h2>
      <form onSubmit={onSubmit.bind(null, question, option)}>
        <input type="text" value={question} name="question" onChange={onChange}/>
        <input type="text" value={option} name="option" onChange={onChange}/>
        
        <button>Submit</button>
      </form>
    </>
  );
} 


CreatePoll.propTypes =  {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  // options: PropTypes.array.isRequired,
  option: PropTypes.string. isRequired
  // loading: PropTypes.bool.isRequired,
};

