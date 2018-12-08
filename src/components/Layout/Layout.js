import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import style from './Layout.module.css'; 
import Toolbar from '../../components/Navigation/Toolbar';

const layout = (props) => (
        <Auxillary>
        <Toolbar />
        <main className={style.my_class}>
            {props.children}
        </main>
        </Auxillary>
);

export default layout;