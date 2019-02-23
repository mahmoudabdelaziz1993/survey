// show survey from and review 
import React ,{Component} from 'react'
import {reduxForm } from 'redux-form'

import SurveyForm from './SurveyForm'
import SurveyReview from './SurveyReview'
class Survey extends Component{
    state= {review : false}
   
    renderComponents(){
        if (!this.state.review) {
            return (<SurveyForm onFormSubmit={(()=>this.setState({review : true}))}/>)
        }else{
            return(<SurveyReview onCancel={()=>this.setState({review : false})}/>)
        }
    }
    
    render(){
        return(
            <div className="container">
                {this.renderComponents()}
            </div>
        )
    }
}
export default reduxForm({form: 'surveyForm'})(Survey)