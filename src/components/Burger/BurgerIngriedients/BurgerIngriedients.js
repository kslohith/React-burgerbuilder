import React , { Component } from 'react';
import style from './ingriendients.module.css';
import PropTypes from 'prop-types';

class BurgerIngriendients extends Component {
    render(){
        let ingridient = null;
        console.log(this.props.type);
        switch(this.props.type) {
            case("BreadBottom"):
                ingridient = <div className={style.BreadBottom}></div>;
                break;
            case("BreadTop"):
                ingridient = (
                    <div className={style.BreadTop}>
                    <div className={style.Seeds1}></div>
                    <div className={style.Seeds2}></div>
                    </div>
                );
                break;
            case("Meat"):
                ingridient = <div className={style.Meat}>
                </div>;
                break;        
            case("Salad"):
                ingridient = <div className={style.Salad}></div>;
                break; 
            case("Cheese"):
                ingridient = <div className={style.Cheese}></div>;
                break; 
            case("Bacon"):
                ingridient = <div className={style.Bacon}></div>;
                break; 
            default:
                ingridient = null;
        }
        return ingridient;
    }
}
BurgerIngriendients.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngriendients;