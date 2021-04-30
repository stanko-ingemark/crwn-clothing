import { Link} from 'react-router-dom';
import {connect} from "react-redux";
import './header.styles.scss';



import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header = ({currentUser, hidden}) => (
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
        <CartIcon/>
      </div>
      { !hidden && <CartDropdown/> }
    </div>
)
const mapStateToProps = ({user: { currentUser}, cart: { hidden}}) => ({
  currentUser, hidden
})

export default connect(mapStateToProps)(Header);
