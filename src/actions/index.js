import axios from "axios";

export const FETCH_CURRENCY_START = 'FETCH_CURRENCY_START';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILURE = 'FETCH_CURRENCY_FAILURE';

export const getCurrency = () => dispatch => {
    console.log('here')
    dispatch({ type: FETCH_CURRENCY_START});
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_CURRENCY_SUCCESS, payload: res.data.bpi })
    })
    .catch(err => {
    //   console.log(err.response);
    //   dispatch({ type: FETCH_CURRENCY_FAILURE, payload: `${err.response}` `${err.response}` })
    });



    
}

