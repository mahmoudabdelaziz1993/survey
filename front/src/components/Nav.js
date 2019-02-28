import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Payment from "./Payment"

class Nav extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return "Loading ....";
            case false:
                return <li><a href="/auth/google" >Login with google </a ></li>;
            default:
                return <div>
                <li style ={{margin:'0 10px'}}>  Credits : {this.props.auth.credits}  </li>
                    <li><Payment/></li>
                    <li><a href="/auth/logout" >Logout  </a ></li></div>;

        }
    }
    render() {
        
        return (
            <nav className =" black">
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to={this.props.auth ? '/home' : '/'} className="brand-logo left">sur<strong className="blue-text">✓</strong>ey</Link>
                        <ul id='nav-mobile' className="right ">
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(Nav)