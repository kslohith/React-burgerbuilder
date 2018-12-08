import React from 'react';
import BurgerIngridients from './BurgerIngriedients/BurgerIngriedients';
import style from './burgerstyle.module.css';

const Burger = (props) => {
    const transformedingridients = Object.keys(props.ingridients)
                                  .map(igkey => {
                                      return[...Array(props.ingridients[igkey])].map((_,i) => {
                                         return  <BurgerIngridients key={igkey+i} type={igkey}/>
                                      });
                                  });

    return(
           <div className={style.Burger}> 
                <BurgerIngridients type="BreadTop"/>
                {transformedingridients}
                <BurgerIngridients type="BreadBottom"/>                
           </div>
    );
};


export default Burger;