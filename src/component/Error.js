import React from 'react'
import { Image,Button } from 'semantic-ui-react'

const Error = ({history}) => {
    return (
        <div >
            <Button content='Previous' icon='arrow left' labelPosition='left' onClick={()=>history.goBack()} /> 
            <hr />
            <Image src="https://sicestpasmalheureux.files.wordpress.com/2012/06/resize_wallpaper.jpeg" size='massive' alt="error" inverted color='teal'/>
            
        </div>
    )
}

export default Error
