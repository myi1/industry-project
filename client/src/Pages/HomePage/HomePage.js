import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage__hero-section'>
        <h2 className='homepage__header'>Welcome back, Name!</h2>
        <p className='homepage__text'>How are you feeling today?</p>
        <div className='homepage__icon-container'>
          <img
            src='http://placekitten.com/g/100/100'
            alt='good'
            className='homepage__face-icon'
          />
          <img
            src='http://placekitten.com/g/100/100'
            alt='medium'
            className='homepage__face-icon'
          />
          <img
            src='http://placekitten.com/g/100/100'
            alt='bad'
            className='homepage__face-icon'
          />
        </div>
      </div>
      <div className='homepage__info-details'>
        <NavLink to='/doctor' className='homepage__button'>
          Book a Consultation
        </NavLink>
        <NavLink to='#' className='homepage__button'>
          My Health Diary
        </NavLink>
        <div className='homepage__article-section'>
          <article>
            <h4 className='homepage__article-header'>
              Latest Health News for You
            </h4>
            <p className='homepage__article-description'>
              U.S. President Joe Biden is announcing Thursday that the U.S. will
              buy hundreds of millions more doses of the Pfizer vaccine to share
              with poorer countries over the next year.
            </p>
            <p className='homepage__article-description'>
              The first new treatment for Alzheimer's disease for nearly 20
              years has been approved by regulators in the United States, paving
              the way for its use in the UK.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
