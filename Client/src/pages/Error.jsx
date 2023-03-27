import React from 'react'
import { Link } from "react-router-dom";

export default function Error() {
 


  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to ='/'>
        <button>
            GO HOME
        </button>
        </Link>
      </p>
    </div>
  );
}