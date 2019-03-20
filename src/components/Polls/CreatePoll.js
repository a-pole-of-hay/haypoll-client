import React from 'react';
import PropTypes from 'prop-types';

export default function CreatePoll({ onAdd, onSubmit, topicChange, promptChange }) {
  return (
    <>
      <h2> Create a Poll</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="question" onChange={topicChange} placeholder="Topic"></input>
        <input id="0" type="text" name="prompt1" onChange={promptChange} placeholder="Prompt 1"></input>
        <button onAdd={onAdd}>Add</button>
        <input id="1"type="text" name="prompt2" onChange={promptChange} placeholder="Prompt 2"></input>
        <button onAdd={onAdd}>Add</button>
        <input id="2" type="text" name="prompt3" onChange={promptChange} placeholder="Prompt 3"></input>
        <button onAdd={onAdd}>Add</button>
        <button> Submit Poll </button>
      </form>
    </>
  );
} 


CreatePoll.propTypes =  {
  onSubmit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  promptChange: PropTypes.func.isRequired,
  topicChange: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

