import React from "react";
// create components for each currency and render them to the dom

const Currency = (props) => {
    const { currency } = props
    return(<div classname="currency">
        <h3>"USD" 
        code "USD",
    "symbol": "&#36;",
    "rate": "29,851.8045",
    "description": "United States Dollar",
    "rate_float": 29851.8045</h3>

        <h3>"GBP": 
"code": "GBP",
"symbol": "&pound;",
"rate": "25,013.1477",
"description": "British Pound Sterling",
"rate_float": 25013.1477
</h3>


        <h3>EUR": 
"code": "EUR",
"symbol": "&euro;",
"rate": "29,160.7121",
"description": "Euro",
"rate_float": 29160.7121
</h3> 

 </div>)
}
export default Currency
