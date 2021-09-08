import React from 'react'
import { Button, Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const PersonsCard = ({data:{name,place,age,id}}) => {
    return (
        <div>
            <Card >
            <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{place}</Card.Meta>
        <Card.Description>
        I am  <strong>{age}</strong> old
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
            <Link to={`/persons/${id}`} ><Button basic color='green'>
            About
        </Button></Link>
        
        </div>
    </Card.Content>
    </Card>
            
        </div>
    )
}

export default PersonsCard
