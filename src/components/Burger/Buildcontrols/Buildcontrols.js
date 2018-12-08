import React from 'react';
import BuildControl from './Buildcontrol';
import style from './buildcontrols.module.css';


const control = [
    {label:"Meat" , type:"Meat"},
    {label:"Bacon" , type:"Bacon"},
    {label:"Salad" , type:"Salad"},
    {label:"Cheese" , type:"Cheese"}
]




const BuildControls = (props) => {
    return(
        <div className={style.BuildControls}>
        {control.map(ctr => {
           return <BuildControl 
           key={ctr.label} 
           label={ctr.label}
           extra={() => props.addedingridient(ctr.type)}
           reduce={() => props.removeingridient(ctr.type)} />
        })}
        <button className={style.OrderButton} disabled={props.disabled} onClick={props.showorder}>ORDER</button>
        </div>
    );

}

export default BuildControls;