import React from "react";
import "./DoctorInfo.scss"

function DoctorInfo() {
  return (
    <div className='doctorInfo'>
      <div className='doctorInfo__details-section'>
        <div className="doctorInfo__info-card">
        <img
              src='http://placekitten.com/g/100/100'
              alt='Doctor'
              className='doctorInfo__doctor-img'
            />
          <div className="doctorInfo__details">
            <p className="doctorInfo__info doctorInfo__weight"> Dr. Chase Gill</p>
            <p className="doctorInfo__info"> Miami, Florida</p>
            <p className="doctorInfo__info"> Miami Neuroscience Center</p>
            <p className="doctorInfo__info">+1 786 871 6800</p>
            <div>
              <button className="doctorInfo__btn">Book an Appointment</button>
            </div>
          </div>
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
    </div>
  );
}

export default DoctorInfo;
