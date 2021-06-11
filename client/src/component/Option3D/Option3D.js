import React from "react";
import "./Option3D.scss";
import Avatar from "../../assets/avatar.jpeg";
import AvatarSelect from "../../assets/avatar-selected.png";

function Option3D(props) {
  return (
    <div className='overlay'>
      <div className='model'>
        <img
          onClick={props.clickHandler}
          src={props.image}
          className='model__image'
          alt='3d model'
        />
        <div className='model__text-container'>
          <p className='model__text'>
            Please select where on your body you are experiencing any issues
          </p>
          <button onClick={props.clickSaveHandler} className='model__button'>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Option3D;
