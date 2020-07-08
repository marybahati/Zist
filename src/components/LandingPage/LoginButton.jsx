import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const LoginButtonX = styled(Button)`
        
        background:  0% 0% no-repeat padding-box !important;
        border: 3px solid #080808;
        opacity: 1;  
        border-radius: 20px !important;
        margin-right: 20px;
        color: #030303;
        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
        width: 50px;
        height: 48px;

        };

        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
        width: 100px;
        height: 38px;
            
        };

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
            width: 150px;
            height: 40px;
            margin: 7px 0 0 0 !important;
                
            };
        @media only screen and (min-width: 1600px) {
        width: 201px;
        height: 48px;
            
        };
`;
export const LoginButton = (props) => {
   return <LoginButtonX basic  onClick={props.handleClick} >LOGIN</LoginButtonX>
}
    
