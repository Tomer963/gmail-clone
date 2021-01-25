import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import gmailLogo from './assets/gmail-logo.svg';

import { useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

import './Header.css';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={gmailLogo} alt='gmail-logo' />
      </div>

      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDownIcon className='input__inputCaret' />
      </div>

      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          src={user?.photoUrl}
          onClick={signOut}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Header;
