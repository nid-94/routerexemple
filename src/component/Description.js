import React from 'react'
import { Button } from 'semantic-ui-react'

const Description = ({match, data,history}) => {
    let personFind=data.find(el=> el.id==match.params.id);
    console.log(personFind)
    return (
        <div>
            <h1>{personFind.name} is {personFind.description}</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/I2UBjN5ER4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            <Button content='Previous' icon='arrow left' labelPosition='left' onClick={()=>history.goBack()} color='teal'/>
        </div>
    )
}

export default Description

