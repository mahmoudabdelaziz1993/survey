// show the form 
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import SurveyFeild from './SurveyField'
import {Link} from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'
class SurveyForm extends Component {
    renderFeilds() {
        return (
            <div>
            <div className='row'>
                <Field type='text' name="title" component={SurveyFeild} label="Survey Title" />
            </div>
            <div className="row">
                <Field type='text' name="subject" component={SurveyFeild} label="Subject Line" />
            </div>
            <div className="row">
                <Field type='text' name="body" component={SurveyFeild} label="Email Body" />
            </div>
            <div className="row"><Field type='text' name="recipients" component={SurveyFeild} label="Recipients List" /></div>
            </div>
        )
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
                    {this.renderFeilds()}
                    <Link to="/home" className='black btn-flat white-text'>Cancel</Link>
                    <button type='submit' className = ' btn-flat right white-text blue'>Next
                        <i className='material-icons right'>done_all</i>
                    </button>
                </form>
            </div>
        )
    }
}
function validate(values){
    const errors ={};
    errors.recipients = validateEmails(values.recipients||"");
    return errors
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount:false
})(SurveyForm)