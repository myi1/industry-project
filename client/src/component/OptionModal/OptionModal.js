import React from "react";
import "./OptionModal.scss";
import Avatar from "../../assets/avatar.jpeg";
import Upload from "../../assets/upload.png";

function OptionModal(props) {
  return (
    <div className='overlay'>
      <div className='options'>
        <h2 className='options__header'>
          Please choose to upload an image or select the 3D model to show where
          you are experiencing ailments
        </h2>
        <div className='options__container'>
          <div className='options__container-a'>
            <img src={Upload} alt='3d model' className='options__select' />
            <p className='options__upload'>Upload Image</p>
          </div>
          <div>
            <img
              onClick={props.clickHandler}
              src={Avatar}
              alt='3d model'
              className='options__select'
            />
            <p className='options__upload'>3D Model</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionModal;
