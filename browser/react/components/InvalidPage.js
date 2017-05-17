import React from 'react';
import { Link } from 'react-router';


function InvalidPage (props) {



  return (
    <div>
      <h1>Page not valid</h1>
      <Link to='/'>
        <h3>Back to home page?</h3>
      </Link>
    </div>
  )
}


export default InvalidPage;
