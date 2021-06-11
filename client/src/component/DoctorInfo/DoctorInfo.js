import React from "react";

function DoctorInfo() {
  return (
    <div className='doctorInfo'>
      <div>
        <img></img>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley
        </p>
      </div>
      <div>
        <button>Book Consultation</button>
      </div>
      <div className='doctorInfo__previous-container'>
        <h3 className='doctorInfo__previous-header'>Previous Visits</h3>
        <ul className='doctorInfo__previous-visits-list'>
          <li className='doctorInfo__previous-visit'>September 24th, 2020</li>
          <li className='doctorInfo__previous-visit'>July 18th, 2020</li>
          <li className='doctorInfo__previous-visit'>February 2nd, 2020</li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorInfo;
