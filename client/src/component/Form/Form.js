import React from "react";
import "./Form.scss";

function Form() {
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

      <button className='form__cta'>File Uploaded</button>
      <div class='form__select-date-container'>
        <h3 className='form__label'>Availability</h3>
        <div className='form__container'>
          <div className='form__date-container'>
            <p className='form__date'>June 11</p>
            <ul className='form__times'>
              <li>10:00 AM</li>
            </ul>
            <div className='form__date-container'>
              <p className='form__date'>June 12</p>
              <ul className='form__times'>
                <li>10:00 AM</li>
              </ul>
            </div>
            <div className='form__date-container'>
              <p className='form__date'>June 13</p>
              <ul className='form__times'>
                <li>10:00 AM</li>
              </ul>
            </div>
            <div className='form__date-container'>
              <p className='form__date'>June 14</p>
              <ul className='form__times'>
                <li>10:00 AM</li>
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
