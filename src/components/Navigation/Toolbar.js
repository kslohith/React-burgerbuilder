import React from 'react';
import style from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar = () =>{
 return(
       <header className={style.Toolbar}>
       <div >Menu</div>
       <div>Logo</div>
       <nav>
           <NavigationItems />
       </nav>
       </header>
 );
}

export default Toolbar;