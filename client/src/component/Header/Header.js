import "./Header.scss";
import UserAvator from "../../assets/Rectangle-34.png"

function Header() {
  return (
    <div className='header'>
   
     
        <h1 className='header__title'> MyHealthAvatar</h1>
    
      <div className='header__container'>
        <ul className='header__links'>
          <li className='header__link'>SEARCH</li>
          <li className='header__link'>DOCTORS</li>
          <li className='header__link'>NEWS</li>
        </ul>
        <img
          src={UserAvator}
          alt='user avatar'
          className='header__avatar'
        />
      </div>
     
    </div>
  );
}

export default Header;
