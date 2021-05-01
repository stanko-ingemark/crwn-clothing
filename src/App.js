import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from './components/header/header.component';
import './App.css';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

class App extends React.Component {
  unSubscribeFromAuth = () => {
  };

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' render={ () => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/> }/>
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
