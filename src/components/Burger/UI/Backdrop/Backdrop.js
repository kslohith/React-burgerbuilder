import React from 'react';
import style from './Backdrop.module.css';

const Backdrop = (Props) =>(
           Props.show ? <div className={style.Backdrop} onClick={Props.clicked}></div> : null
);

export default Backdrop;