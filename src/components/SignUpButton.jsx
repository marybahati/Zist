import React from 'react'
import { Button } from 'semantic-ui-react'
// import styled from 'styled-components';


export const SignUpButton = (props) => (
    <Button  style={{
        width: '201px',
        height: '48px',
        background: '#0B0B0B 0% 0% no-repeat padding-box',
        color: '#fff',
        opacity:1,  
        borderRadius:'20px',
        marginRight: '20px'
    }} onClick={props.handleClick} >SIGN UP</Button>
)
    
