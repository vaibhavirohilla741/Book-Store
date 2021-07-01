import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">Shop</NavigationItem>
        <NavigationItem link="/">Pages</NavigationItem>
        <NavigationItem link="/">Blog</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
    </ul>
);

export default navigationItems;