import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import Header from './components/header/header.component';
import './App.css';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  unSubscribeFromAuth = () =>{};

  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      }
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header currentUser = {this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
        </div>
    );
  }
}

export default App;
