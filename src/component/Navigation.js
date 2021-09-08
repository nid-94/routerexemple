import React from 'react'
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
        <ul className='list'>
            <Link to="/home"><li as='a' >Home</li></Link>
            <Link to="/persons"> <li as='a'>Persons</li></Link>
            <Link to="/about"> <li as='a' to="/home">About</li></Link>
            <Link to="/contact"> <li as='a'>Contact</li></Link>
        </ul>
        </div>
    )
}

export default Navigation
