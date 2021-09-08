import React from 'react'
import Data from '../PersonsData'
import PersonsCard from './PersonsCard';

const Persons = () => {
    return (
        <div >
            <h1>Personal cards</h1>
            <div className="card">
            {Data.map((data,i)=>
            <PersonsCard data={data} key={i}/>
            )}
            </div>
            
        </div>
    )
}

export default Persons
