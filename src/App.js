import React from 'react';


import { connect } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import {  getCurrency } from './actions';

import CurrencyList from './components/CurrencyList'
import CurrencyForm from './components/CurrencyForm';



function App(props) {
  const { isFetching, error, getCurrency } = props;
  console.log("props",props)
  useEffect(() => {
   getCurrency();
   

  }, [])

  
 return (
    <div className="App">
      <h4>Async Redux Project</h4>
      <CurrencyForm/>


    {
    (error !=="") && <h3>{error}</h3>
    }
     
    
    {
      isFetching ? <h3> Fetching Currency </h3> : <CurrencyList/>
    }
   
    
    
    
    </div>
  );
}

const mapStateToProps = state => {
  return {
   currency: state.currency,
   error: state.error

  }
}


export default connect(
   mapStateToProps, 
   { getCurrency })
   (App);



