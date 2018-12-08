import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import style from './buttonstyle.module.css';

const OrderSummary = (props) => {
    const ingridients = Object.keys(props.ingridients)
                        .map(igkey => {
                            return <li>{igkey}: {props.ingridients[igkey]}</li>
                        });
    return(
        <Auxillary>
            <h2>Order Summary</h2>
            <ul>
                {ingridients}
            </ul>
            <p><strong>Total Price to be paid:{props.totalprice}</strong></p>
            <p>Would you like to checkout?</p>
            <button className={[style.Button , style.Success].join(' ')} onClick={props.success}>Yes</button>
            <button className={[style.Button , style.Danger].join(' ')} onClick={props.cancel}>No</button>
        </Auxillary>
    );

}

export default OrderSummary;