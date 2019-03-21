import React from 'react';
import PropTypes from 'prop-types';

function Polls({ polls }) {
  const listOfPolls = polls.map((poll, i) => {
    return (
      <li key={i}>{poll.question}</li>
    );
  });
  return (
    <ul>
      {listOfPolls}
    </ul>
  );
}

Polls.propTypes = {
  polls: PropTypes.array.isRequired
};

export default Polls;

