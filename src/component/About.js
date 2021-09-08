import React from 'react'
import { Message,Button } from 'semantic-ui-react'

const About = ({history}) => (
    <>
  <Message style={{fontSize:20}}>
    <Message.Header>Things you need to know</Message.Header>
    <p>
      This website will show the profession of each member subscribed here
    </p>
  </Message>
  <br />
    <Button content='home' icon='home' labelPosition='left'  inverted color='green'onClick={()=>history.push("/home")} />
  </>
)

export default About
