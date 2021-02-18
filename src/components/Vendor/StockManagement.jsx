import React, { useState } from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import addButton from './../../Assets/add.png'
import bananas from './../../Assets/bananas.png'
import strawberries from './../../Assets/strawberries.png'
import blueBerries from './../../Assets/blue-berries.png'
import DatePicker from 'react-date-picker';
import History from '../../History';

const AddButton = styled(Button)`
   background: inherit !important;
   font-size : 40px !important;
   padding : 0 !important;
   color : black !important;
   margin: 0 8px !important;
`;
const EditButton = styled(Button)`
   background: inherit !important;
   font-size : 22px !important;
   padding : 0 !important;
   color : orange !important;
`;
const CenteredTextColumn = styled(Grid.Column)`
   margin: auto 0 !important;
   padding-bottom: 20px;
`;
const CenteredColumn = styled(Grid.Column)`
margin: 0 auto !important;
`;
const AddSupplierButton = styled(Button)`
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
const StockManagement = () => {

    const handleRedirect = () => {
        History.push('/suppliers')
    }
    return (
        <Grid>
            <Grid.Row>
                <CenteredTextColumn width={16} >
                    <h1> Welcome to Shelving where putting up your wares is all within a button’s reach. </h1>
                </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <CenteredTextColumn width={16} >
                    <h2> Step 1: Add suppliers or find suppliers to easily manage your inventory. </h2>
                </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <CenteredColumn width={6}>
                    <AddSupplierButton onClick={handleRedirect}> Add Suppliers </AddSupplierButton>
                </CenteredColumn>
            </Grid.Row>
        </Grid>
    )
}

export default StockManagement