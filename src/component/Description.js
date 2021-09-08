import React from 'react'

const Description = ({match, Data}) => {

    let personFind=Data.find(p=>p.id===match.params.id);
    console.log(personFind)
    return (
        <div>
            {/* <h1>{personFind.name}</h1> */}
        </div>
    )
}

export default Description
