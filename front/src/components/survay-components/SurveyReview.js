import React from 'react'
import { connect } from "react-redux"
import * as actions from '../../actions';
// to redirect after submit
import {withRouter} from 'react-router-dom'
const SurveyReview = ({ onCancel, data ,submitSurvey,history}) => {
    return (
        <div className='row'>
            <div className="card black ">
                <div className="card-content white-text">
                    <span className="card-title center blue-text "> Please Review Your Input Data </span>
                    <div>
                        <label className="blue-text">Survey Title</label>
                        <p>{data.title}</p>
                    </div>
                    <div>
                        <label className="blue-text">Survey Subject</label>
                        <p>{data.subject}</p>
                    </div>
                    <div>
                        <label className="blue-text">Email Body </label>
                        <p>{data.body}</p>
                    </div>
                    <div>
                        <label className="blue-text">List of Recipients</label>
                        <p>{data.recipients}</p>
                    </div>
                </div>
            </div>
            <button className="black btn-flat white-text" onClick={onCancel}> Back </button>
            <button onClick={()=>submitSurvey(data,history)} className=' btn-flat right white-text blue'>Send
                        <i className='material-icons right'>email</i>
            </button>
        </div>
    )
}
function mapStateToProps(state) {
    return { data: state.form.surveyForm.values };
};

export default connect(mapStateToProps,actions)(withRouter(SurveyReview))