import React from 'react'
import {Link} from 'react-router-dom'
import SurveyList from './survay-components/SurveyList'
const Home = () => {
    return (
        <div className="container">
            <SurveyList/>
            <div className='fixed-action-btn'>
                <Link to='/survey/new' className='btn-floating btn-large black '>
                    <i className='large material-icons'> add </i>
                </Link>
            </div>
        </div>
    )
}

export default Home