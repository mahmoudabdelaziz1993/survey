import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';
class Payment extends Component{
    render(){
    
        return(
            <StripeCheckout
            name= "survey"
            description= "$5 for 5 email credits"
            amount ={500}
            token ={token=>this.props.handlePayment(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        )
    }
}
export default connect(null,actions)(Payment);