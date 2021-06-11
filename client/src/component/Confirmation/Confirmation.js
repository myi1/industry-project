import { Link } from "react-router-dom";
import React from "react";
import "./Confirmation.scss";

function Confirmation() {
  return (
    <div className='confirmation'>
      <h2 className='confirmation__header'>Confirmed</h2>
      <p className='confirmation__body'>
        You're appointment with Dr. Chase Gill is on Sunday, June 12th at 2:00
        PM EST
      </p>
      <Link className='confirmation__button' to='/'>
        Return to Home page
      </Link>
    </div>
  );
}

export default Confirmation;
