import React from 'react';

function Vote() {
  return (
    <>
      <h3>Question:</h3>
      <p>Question goes here</p>
      <form>
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <button> VOTE </button>
      </form>
    </>
  );
}

export default Vote;
