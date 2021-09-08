import React from 'react'
import Data from '../PersonsData'
import PersonsCard from './PersonsCard';
import { Button } from 'semantic-ui-react'

const Persons = ({history}) => {
    return (
        <div >
            <h1>Personal cards</h1>
            <div className="card">
            {Data.map((data,i)=>
            <PersonsCard data={data} key={i}/>
            )} 
            
            </div>
            <br />
        <Button content='home' icon='home' labelPosition='left'  inverted color='green'onClick={()=>history.push("/home")} />
            
        </div>
    )
}

export default Persons
