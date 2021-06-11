import React from "react";

function Form() {
  return (
    <form className='form'>
      <h2 className='form__header'>Header</h2>
      <input
        type='text'
        name='location'
        className='form__location'
        placeholder='Where does it hurt'
      />
      <label className='form__label'>
        Description of issue
        <input type='text' name='description' className='form__description' />
      </label>

      <button className='form__cta'>CTA for Avatar</button>
      <div class='form__select-date-container'>
        <h3 className='form__select-date-header'>Availability</h3>
        <div className='form__container'>
          <div className='form__date-container'>
            <p className='form__date'>11-06-2021</p>
            <ul className='form__times'>
              <li>10:00 AM</li>
              <li>10:15 AM</li>
              <li>11:30 AM</li>
              <li>12:45 PM</li>
              <li>2:45 PM</li>
              <li>4:45 PM</li>
            </ul>
            <div className='form__date-container'>
              <p className='form__date'>14-06-2021</p>
              <ul className='form__times'>
                <li>10:00 AM</li>
                <li>10:15 AM</li>
                <li>11:30 AM</li>
                <li>12:45 PM</li>
                <li>2:45 PM</li>
                <li>4:45 PM</li>
              </ul>
            </div>
            <div className='form__date-container'>
              <p className='form__date'>15-06-2021</p>
              <ul className='form__times'>
                <li>10:00 AM</li>
                <li>10:15 AM</li>
                <li>11:30 AM</li>
                <li>12:45 PM</li>
                <li>2:45 PM</li>
                <li>4:45 PM</li>
              </ul>
            </div>
            <div className='form__date-container'>
              <p className='form__date'>16-06-2021</p>
              <ul className='form__times'>
                <li>10:00 AM</li>
                <li>10:15 AM</li>
                <li>11:30 AM</li>
                <li>12:45 PM</li>
                <li>2:45 PM</li>
                <li>4:45 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h3 className='form__label'>Notify me</h3>
      <div className='form__select-container'>
        <input type='radio' className='form__input-select' value='TEXT' />
        <input type='radio' className='form__input-select' value='EMAIL' />
      </div>
      <button className='form__cta'>CTA</button>
    </form>
  );
}

export default Form;
