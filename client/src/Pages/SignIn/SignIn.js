import { NavLink } from "react-router-dom";
import "./SignIn.scss";

function SignIn() {
  return (
    <div className='card-component'>
      <h2 className='card-component__header'>Please Sign In</h2>
      <input className='card-component__input' placeholder='Username'></input>
      <input className='card-component__input' placeholder='Password'></input>
      <NavLink to='/home' className='card-component__button'>
        LOGIN
      </NavLink>
    </div>
  );
}

export default SignIn;
