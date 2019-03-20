import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Poll</Link>
        <Link to="/results">Results</Link>
      </h1>
    </header>
  );
}
