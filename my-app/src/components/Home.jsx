import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>home component</h1>
      <Link to="/" >go to Header</Link>
    </div>
  );
}

export default Home;
