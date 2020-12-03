import React, { useState } from 'react';
import { Grid, Image, Button, Icon, List, Form, TextArea } from "semantic-ui-react";
import styled from 'styled-components';
import visa from './../../Assets/visa.svg';
import mpesa from './../../Assets/mpesa.svg';
import cash from './../../Assets/cash.svg';
import BusinessPic from './../../Assets/user-list-business.png'
import Collapsible from 'react-collapsible';
import { Checkbox } from 'semantic-ui-react'
import { Accordion,Menu } from 'semantic-ui-react'

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;
const UserName = styled.h2`
    text-decoration: underline !important;
`;
const Columns = styled(Grid.Column)`
    //  padding: ${props => props.spaced ? '30px 0 0 0 !important' : '10px 0 0 0 !important'};
     margin: auto 0  !important;
`;
const EditLink = styled(List.Item)`
     color: #FFBD59 !important;
     font-size: 23px !important;
`;
const ProductName = styled(Grid.Column)`
   margin: auto 0 auto 15px !important;
`;
const ProductImages = styled(Image)`
   width: 80% !important;
   margin: 0 auto 0 0 !important;
`;
const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 20px 0 40px 0 !important "};
   padding: 0 !important;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const OrderNowColumn = styled(Grid.Column)`
   width: 50% !important;
   margin: 0 auto !important;
`;
const OrderNowButton = styled(Button)`
   width: 100% !important;
   background: #FFBD59 0% 0% no-repeat padding-box !important;
   border: 2px solid #FEE2D4 !important;
   border-radius: 24px !important;
   opacity: 1;
   color: black !important;
   height: 90px !important;
   font-size: 22px !important;
`;

const PaymentDetails = () => {
    
    return (
        <MainDiv>
            <MainGrid>
               <Grid.Row>
               <OrderNowColumn>
                        <h2 style={{textDecoration:'underline '}}> Payment Details </h2>
                        <h2> Payment Methods </h2>
                        <h3> Pay Bila Stress </h3>
                    </OrderNowColumn>
               </Grid.Row> 
               <Grid.Row>
               <OrderNowColumn>
                   <Grid>
                       <Grid.Row width={16}>
                           <Grid.Column width={6}>
                           <Image src={visa}/>
                           </Grid.Column>
                           <Columns >
                           <h3 >  3588…. </h3>
                           </Columns>
                       </Grid.Row>
                   </Grid>                 
                </OrderNowColumn>
               </Grid.Row>
               <Grid.Row>
               <OrderNowColumn>
                   <Grid>
                       <Grid.Row width={16}>
                           <Grid.Column width={6}>
                           <Image src={mpesa}/>
                           </Grid.Column>
                           <Columns >
                           <h3 >  Mpesa </h3>
                           </Columns>
                       </Grid.Row>
                   </Grid>                 
                </OrderNowColumn>
               </Grid.Row>
               <Grid.Row>
               <OrderNowColumn>
                   <h2> Pay On Delivery </h2>
                   <Grid>
                       <Grid.Row width={16}>
                           <Grid.Column width={6}>
                           <Image src={cash}/>
                           </Grid.Column>
                           <Columns >
                           <h3 >  Cash </h3>
                           </Columns>
                       </Grid.Row>
                   </Grid>                 
                </OrderNowColumn>
               </Grid.Row>
                <Grid.Row>
                    <OrderNowColumn>
                        <OrderNowButton > CONFIRM </OrderNowButton>
                    </OrderNowColumn>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default PaymentDetails