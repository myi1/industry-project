import React, { Component } from "react";
import DoctorInfo from "../../component/DoctorInfo/DoctorInfo";
import Form from "../../component/Form/Form";
import OptionModal from "../../component/OptionModal/OptionModal";
import Option3D from "../../component/Option3D/Option3D";

export default class DoctorsPage extends Component {
  state = {
    form: true,
    modal: false,
    modal3D: true,
  };
  render() {
    const { form, modal, modal3D } = this.state;

    return (
      <div>
        <DoctorInfo />
        {form ? <Form /> : null}
        {modal ? <OptionModal /> : null}
        {modal3D ? <Option3D /> : null}
      </div>
    );
  }
}
