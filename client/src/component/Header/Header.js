import "./Header.scss";

function Header() {
  return (
    <div className='header'>
      <div>
        <img
          src='http://placekitten.com/g/160/160'
          alt='logo'
          className='header__logo'
        />
      </div>
      <div className='header__container'>
        <ul className='header__links'>
          <li className='header__link'>SEARCH</li>
          <li className='header__link'>DOCTORS</li>
          <li className='header__link'>NEWS</li>
        </ul>
        <img
          src='http://placekitten.com/g/160/160'
          alt='user avatar'
          className='header__avatar'
        />
      </div>
    </div>
  );
}

export default Header;
