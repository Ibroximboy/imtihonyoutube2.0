import './Header.scss';

//Images
import Burger from '../../Images/Burger.png'
import Logo from '../../Images/Logo1.png'
import Camera from '../../Images/Camera.png'
import Burger2 from '../../Images/Burger2.png'
import Natification from '../../Images/Natification.png'
import Userpic from '../../Images/Userpic.png'

//Hooks
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <header className='header'>
            <div className="header-box">
                <img src={Burger} alt="Burger" className="header-menu" />
                <img src={Logo} alt="Logo" className="header-logo" />
            </div>
            <div className="header-box">
                <input type="text" className='header-input' placeholder='Search'/>
            </div>
            <div className="header-box">
                <img src={Camera} alt="Camera" className="header-camera" />
                <img src={Burger2} alt="Burger" className="header-burger" />
                <img src={Natification} alt="" className="header-natification" />
                <Link to='/chanel'><img src={Userpic} alt="User-logo" className="header-user" /></Link>
            </div>
        </header>
    </>
  );
}

export default Header;