import React, { Component } from "react";
import DoctorInfo from "../../component/DoctorInfo/DoctorInfo";
import Form from "../../component/Form/Form";
import OptionModal from "../../component/OptionModal/OptionModal";
import Option3D from "../../component/Option3D/Option3D";
import "./DoctorsPage.scss";
import Avatar from "../../assets/avatar.jpeg";
import AvatarSelect from "../../assets/avatar-selected.png";

export default class DoctorsPage extends Component {
  state = {
    form: true,
    modal: false,
    modal3D: false,
    selected: false,
  };

  handleShowModal = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };

  handleshow3D = () => {
    this.setState({
      modal: false,
      modal3D: true,
    });
  };

  handleSelectPain = () => {
    this.setState({
      selected: true,
    });
  };

  handleSave = () => {
    this.setState({
      modal: false,
      modal3D: false,
      selected: false,
    });
  };
  render() {
    const { selected } = this.state;
    let AvatarImage;
    if (selected) {
      AvatarImage = AvatarSelect;
    } else {
      AvatarImage = Avatar;
    }
    const { form, modal, modal3D } = this.state;

    return (
      <div>
        <div className='doctor-page__container'>
          <DoctorInfo />
          {form ? <Form clickHandler={(e) => this.handleShowModal(e)} /> : null}
        </div>
        {modal ? <OptionModal clickHandler={this.handleshow3D} /> : null}
        {modal3D ? (
          <Option3D
            image={AvatarImage}
            clickHandler={this.handleSelectPain}
            clickSaveHandler={this.handleSave}
          />
        ) : null}
      </div>
    );
  }
}
