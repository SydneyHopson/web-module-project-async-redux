import React, { useState } from "react";
import { connect } from 'react-redux';
import { getCurrency } from "../actions";
import Currency from './Currency'










const CurrencyList = (props) => {
    console.log("IM here",props.currency)
   const { currency } = e => {
        e.preventDefault();
        props.getCurrency();
    };
    return (<div id="currencyList">

        <h4>CoinDesk Bitcoin Price Index </h4>

        {
            props.currency.map(currency => {
              ( 
             <Currency getCurrency={currency} />
                )
            } )
        } 
        






    </div>)
    
   
};

 
const mapStateToProps = state => {
    return {
        currency: state.currency
    }
} 


export default connect(mapStateToProps)(CurrencyList);