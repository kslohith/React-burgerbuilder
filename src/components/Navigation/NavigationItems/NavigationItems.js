import React from 'react';
import style from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const NavigationItems = () => {
    return(
       <ul className={style.NavigationItems}>
           <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
           <NavigationItem link={'/'} >Checkout</NavigationItem>
       </ul>
    );
}

export default NavigationItems;