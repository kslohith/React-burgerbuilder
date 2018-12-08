import React from 'react';
import style from './modol.module.css';
import Auxillary from '../../../../hoc/Auxillary';
import BackDrop from '../Backdrop/Backdrop';

const Modol = (props) => {
    return(
        <Auxillary>
        <BackDrop show={props.show} clicked={props.cancel} />
         <div className={style.Modal}
              style={{
                  transform: props.show ? 'translateY(0)' : 'translateX(-100vh)',
                  opacity: props.show ? '1': '0'
              }} >
             {props.children}
         </div>
         </Auxillary>
    );
}

export default Modol;