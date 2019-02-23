import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="container">
            <h2 className="center ">Home</h2>
            <div className='fixed-action-btn'>
                <Link to='/survey/new' className='btn-floating btn-large black '>
                    <i className='large material-icons'> add </i>
                </Link>
            </div>
        </div>
    )
}

export default Home