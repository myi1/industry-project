import React from "react";
import "./OptionModal.scss";

function OptionModal() {
  return (
    <div className='options'>
      <h2 className='options__header'>Please select one</h2>
      <button className='options__button'>Upload Image</button>
      <button className='options__button'>3D Model</button>
    </div>
  );
}

export default OptionModal;
