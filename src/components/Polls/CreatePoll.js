import React from 'react';
import PropTypes from 'prop-types';

export default function CreatePoll() {
  return (
    <>
      <h2> Create a Poll</h2>
      <form>
        <label> Questions/Topic</label>
        <input type="text"></input>
        <label> Prompt 1</label>
        <input id="0" type="text"></input>
        <label> Prompt 2</label>
        <input id="1"type="text"></input>
        <label> Prompt 3</label>
        <input id="2" type="text"></input>
        <button> Submit Poll </button>
      </form>
    </>
  );
} 


CreatePoll.propTypes =  {
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

