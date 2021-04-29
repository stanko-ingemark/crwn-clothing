import { Link} from 'react-router-dom';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>Shop</Link>
        <Link to='/shop' className='option'>Contact</Link>
        {
          currentUser ?
              <div className='option' onClick={() => auth.signOut()}>Sign out</div>
              :
              <Link className='option' to='/signin'>Sign in</Link>
        }
      </div>

    </div>
)
export default Header;
