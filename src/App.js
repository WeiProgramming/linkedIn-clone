import React, {useEffect} from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { selectUser } from './features/userSlice';
import Login from './components/login/Login'
import {auth} from './firebase'
import {useDispatch} from 'react-redux';
import {login, logout} from './features/userSlice'
import Widgets from './components/widgets/Widgets'

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is loggedIn
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">

      <Header/>
      {!user ? (<Login/>) : (
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      )}
    </div>
  );
}

export default App;
