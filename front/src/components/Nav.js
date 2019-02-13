import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class Nav extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return "Loading ....";
            case false:
                return <li><a href="/auth/google" >Login with google </a ></li>;
            default :
                return <li><a href="/auth/logout" >Logout  </a ></li>;

        }
    }
    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to={this.props.auth?'/home':'/'} className="brand-logo"><strong className="black-text">s</strong>urvey</Link>
                        <ul id='nav-mobile' className="right hide-on-med-and-down">
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