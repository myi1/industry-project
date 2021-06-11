import React from "react";

function Option3D() {
  return (
    <div model>
      <img src='' className='model__image' alt='3d model' />
      <div className='model__text-container'>
        <h2 className='model__header'>Instructions</h2>
        <p className='model__text'>
          Please select where on your body you are experiencing any issues
        </p>
        <button className='model__button'>Save</button>
      </div>
    </div>
  );
}

export default Option3D;
