import React , { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Ingridients from '../../components/Burger/BurgerIngriedients/BurgerIngriedients';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/Buildcontrols/Buildcontrols';
import style from './burgerbuider.module.css';
import Modol from '../../components/Burger/UI/Modol/Modol';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios_orders';
import Spinner from '../../components/Burger/UI/Spinner/spinner';

const INGRIDIENT_PRICE = {
    Meat: 1.3,
    Salad: 0.4,
    Bacon: 0.9,
    Cheese: 1
}
class BurgerBuilder extends Component{
    state = {
        ingridients: {
            Meat:0,
            Bacon:0,
            Salad:0,
            Cheese: 0
        },
        totalprice: 5,
        isdisabled: true,
        showorder: false,
        spinner: false
    }

    ispurchasehandler = (ingridient) => {
        let totor = 0;
         const newingridient = {
             ...ingridient
         };
         for( let key in newingridient )
          {
              totor = totor + newingridient[key];
          } 
          if( totor > 0 )
          {
              this.setState({
                  isdisabled: false
              });
          }
          else
          {
            this.setState({
                isdisabled: true
            });
          }
    }

    ingridientaddedhandler = (type) => {
        const oldcount = this.state.ingridients[type];
        const updatedcount = oldcount + 1;
        const updatedingridient = {
            ...this.state.ingridients
        };
        updatedingridient[type] = updatedcount;
        const oldprice = this.state.totalprice;
        const updatedprice = oldprice + INGRIDIENT_PRICE[type];
        this.setState({
            ingridients: updatedingridient,
            totalprice: updatedprice
        });
        this.ispurchasehandler(updatedingridient);
    }

    ingridientremovehandler = (type) => {
        const oldcount = this.state.ingridients[type];
        const updatedcount = oldcount- 1;
        const updatedingridient = {
            ...this.state.ingridients
        };
        updatedingridient[type] = updatedcount;
        const oldprice = this.state.totalprice;
        const updatedprice = oldprice - INGRIDIENT_PRICE[type];
        this.setState({
            ingridients: updatedingridient,
            totalprice: updatedprice
        });
        this.ispurchasehandler(updatedingridient);
    }

    showorderhandler = () => {
        this.setState({
            showorder: true
        });
    }

    cancelorderhandler = () => {
        this.setState({
            showorder: false
        });
    }

    continueorderhandler = () => {
        this.setState({
            spinner: true
        });
        const order = {
            ingridient: this.state.ingridients,
            price: this.state.totalprice.toFixed(2),
            customer: {
                name: 'lohith',
                email: 'test@test.com',
                address: {
                    street:'teststreet',
                    city: 'mycity'
                }
            }
        }
         axios.post('/orders.json',order)
            .then(response => {
                this.setState({
                    spinner: false,
                    showorder: false
                });
                console.log(response);
            }).
            catch(error => {
                    this.setState({
                        spinner: false,
                        showorder: false
                    });
                    console.log(error);
            });  
           
    }

  


    render() {
        let ordersummary = <OrderSummary 
        ingridients={this.state.ingridients}
        success={this.continueorderhandler}
        cancel={this.cancelorderhandler}
        totalprice={this.state.totalprice}
        />;
        if( this.state.spinner)
         {
             ordersummary = <Spinner />;
         }
       
        return (
             <Auxillary>
                 <Modol show={this.state.showorder} cancel={this.cancelorderhandler} >
                    {ordersummary}
                 </Modol>
                 <Burger ingridients={this.state.ingridients}/>
                 <div className={style.burgerprice}>
                     <h1>Total Price is:</h1>
                     <h1>{this.state.totalprice.toFixed(2)}</h1>
                 </div>
                 <BurgerControls  
                 addedingridient={this.ingridientaddedhandler}
                 removeingridient={this.ingridientremovehandler}
                 disabled={this.state.isdisabled}
                 showorder={this.showorderhandler}/>
             </Auxillary>
        );
    }
}

export default BurgerBuilder;