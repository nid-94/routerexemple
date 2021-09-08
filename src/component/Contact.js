import React from 'react'
import {Button,Card } from 'semantic-ui-react'

const items = [
    {
        header: 'Mail',
        description:
        'arfaoui.nidhal94@gmail.com',
    },
    {
        header: 'What s app',
        description:
        '+216 21 193 090',
    },
    {
        header: 'Location',
        description:
        'Tunis,Menzah V',
    }
  ]
const Contact = ({history}) => (
    <> 
        <Card.Group centered items={items} /> <br />
    <Button content='home' icon='home' labelPosition='left'  inverted color='green'onClick={()=>history.push("/home")} />

    </>
)

export default Contact

    
