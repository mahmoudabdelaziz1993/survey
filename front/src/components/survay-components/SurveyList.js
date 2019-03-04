import React ,{Component}from"react"
import {connect} from "react-redux"
import {fetchSurvays} from "../../actions"
class SurveyList extends Component{
    componentDidMount(){
        this.props.fetchSurvays();
    }
    renderList(){
       return this.props.surveys.reverse().map(survey=>{
            return(
                <div className="card darken-3" key ={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right"> Sent ON : {new Date(survey.date_sent).toUTCString()}</p>
                        <br/>
                        <div className="card-action">
                            <span className="new badge green "> {survey.yes} votes yes </span>
                            <span className="new badge red "> {survey.no} votes no </span>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="container">
                {this.renderList()}
            </div>
        )
    }
}
function mapStateToProps({ surveys }){
    return { surveys }
}
export default connect(mapStateToProps ,{fetchSurvays})(SurveyList)