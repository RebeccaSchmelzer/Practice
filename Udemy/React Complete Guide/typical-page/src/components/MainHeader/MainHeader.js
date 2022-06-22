import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
//remove the isLogged in on mainheader bc child of app where ctx is used

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
