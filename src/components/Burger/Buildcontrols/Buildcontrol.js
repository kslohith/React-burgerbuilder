import React from 'react';
import style from './buildcontrol.module.css';


const Buildcontrol = (props) => {
     return(
         <div className={style.BuildControl}>
             <div className={style.Label}>{props.label}</div>
             <button className={style.Less} onClick={props.reduce}>Less</button>
             <button className={style.More} onClick={props.extra}>More</button>
         </div>
     )
}

export default Buildcontrol;