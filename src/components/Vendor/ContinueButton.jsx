import React,{useState} from 'react';
import styled from 'styled-components';
import { Grid, Button } from "semantic-ui-react";

const Buttonx = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 50px 0 !important;
`;

export const ContinueButton = (props) => {
    return  <Buttonx type='submit' onClick={props.handleClick} > CONTINUE </Buttonx>
}


