import React from 'react';
import { Link } from 'react-router-dom';

function Feature() {
  return (
    <div>
      <h1>feature component</h1>
      <Link to="/home" >go to Home</Link>
    </div>
  );
}

export default Feature;
