import React from "react";
import "./Form.scss";

function Form(props) {
  return (
    <form className='form'>
      <h2 className='form__label'>Appointment Details</h2>
      <input className='form__location' list='location' />
      <datalist name='location' id='location' className='form__location'>
        <option value='Chronic back pain' />
        <option value='Chest pain' />
        <option value='Knee pain' />
        <option value='Joint pain' />
        <option value='Chronic headaches' />
        <option value='Arthritis' />
      </datalist>
      <label className='form__label'>
        Description of issue
        <input type='text' name='description' className='form__description' />
      </label>

      <button className='form__cta' onClick={props.clickHandler}>
        3D Model
      </button>
      <div class='form__select-date-container'>
        <h3 className='form__label'>Availability</h3>
        <div className='form__container'>
          <div className='form__date-container'>
            <p className='form__date'>June 11</p>
            <p className='form__date'> 8:00 AM</p>
          </div>
          <div className='form__date-container'>
            <p className='form__date'>June 12</p>
            <p className='form__date'> 9:00 AM</p>
          </div>
          <div className='form__date-container'>
            <p className='form__date'>June 13</p>
            <p className='form__date'> 10:00 AM</p>
          </div>
          <div className='form__date-container'>
            <p className='form__date'>June 14</p>
            <p className='form__date'> 11:00 AM</p>
          </div>
        </div>
      </div>
      <div className='form__select-container'>
        <h3 className='form__label'>Get Remidners</h3>
        <div className='form__container-text'>
          <div>
            <input
              type='radio'
              id='text'
              className='form__input-select'
              value='TEXT'
            />
            <label
              for='text'
              className='form__input-select form__input-select--adjust '>
              TEXT
            </label>
          </div>
          <div>
            <input type='radio' className='form__input-select' value='EMAIL' />
            <label for='text' className='form__input-select'>
              EMAIL
            </label>
          </div>
        </div>
      </div>
      <button className='form__cta form__cta--big'>CONFIRM APPOINTMENT</button>
    </form>
  );
}

export default Form;
