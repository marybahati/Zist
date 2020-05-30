import React from 'react'
import { Button } from 'semantic-ui-react'

export const LoginButton = (props) => (
    <Button  style={{
        width: '201px',
        height: '48px',
        background: ' 0% 0% no-repeat padding-box',
        border:' 2px solid #080808',
        opacity:1,  
        borderRadius:'20px'
    }} onClick={props.handleClick} >LOGIN</Button>
)
    
