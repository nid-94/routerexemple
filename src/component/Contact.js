import React from 'react'
import { Tab,Button } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Mail', render: () => <Tab.Pane>arfaoui.nidha94@gmail.com</Tab.Pane> },
    { menuItem: 'Phone number', render: () => <Tab.Pane>+216 21 193 090</Tab.Pane> },
    { menuItem: 'instagram', render: () => <Tab.Pane>iiii</Tab.Pane> },
]

const Contact = ({history}) =>{
    console.log(history)
    return(
        <>   
   
    <Tab panes={panes} />
    <br />
    <Button content='home' icon='home' labelPosition='left'  inverted color='green'onClick={()=>history.push("/home")} />
    
    </>
    ) ;
    
} 
export default Contact
