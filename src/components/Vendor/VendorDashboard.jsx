import React, { useState } from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import v1 from './../../Assets/v1.png';
import v2 from './../../Assets/v2.png';
import v3 from './../../Assets/v3.png';
import v4 from './../../Assets/v4.png';
import v5 from './../../Assets/v5.png';
import v6 from './../../Assets/V6.png';
import v7 from './../../Assets/V7.png';
import v8 from './../../Assets/V8.png';
import Collapsible from 'react-collapsible';
import { DonutChart, Chart } from './Chart';

const MainGrid = styled(Grid)`
   background: #F9F7F1;
   padding : 80px 0 50px 60px !important;
`;
const ImageColumn = styled(Grid.Column)`
   padding : 0 40px 0 0 !important;
   text-align: center;
`;
const Heading = styled.h1`
   padding : 0 !important;
`;
const SubHeading = styled.h3`
   padding : 60px 0 15px 0 !important;
`;
const SubHeadingText = styled.h2`
   text-decoration: underline;
`;
const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;
export const VendorDashboard = () => {

    return (
        <div>
            <MainGrid>

                <Grid>
                    <Heading> Fresh Field Vegetables’ Dashboard. </Heading>
                    <Grid.Row>
                        <ImageColumn width={3}>
                            <Image src={v1} />
                            <h1> Storefront </h1>
                        </ImageColumn>
                        <ImageColumn width={3}>
                            <Image src={v4} />
                            <h1> Inventory </h1>
                        </ImageColumn>
                        <ImageColumn width={3}>
                            <Image src={v5} />
                            <h1> Service desk </h1>
                        </ImageColumn>
                        <ImageColumn width={3}>
                            <Image src={v2} />
                            <h1> Analytics </h1>
                        </ImageColumn>
                        <ImageColumn width={3}>
                            <Image src={v3} />
                            <h1> Settings </h1>
                        </ImageColumn>
                    </Grid.Row>

                    <Grid.Row>
                        <h2> Recent Transactions. </h2>
                    </Grid.Row>

                    <Grid.Row>
                        <SubHeadingText> In the past week </SubHeadingText>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4} style={{ padding: '0' }} >
                            <h1 style={{ paddingBottom: '10px' }} > Order Number </h1>
                        </Grid.Column>
                        <Grid.Column width={7} style={{ padding: '0' }} >
                            <h1 style={{ paddingBottom: '21px' }} > Order details </h1>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: '0' }} >
                            <h1 style={{ padding: '0 0 10px 0 ' }} > Date </h1>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>

                        <Grid.Column width={4} style={{ padding: '0' }} >
                            <h2> 36221708 </h2>
                        </Grid.Column>

                        <Grid.Column width={7} style={{ padding: '0' }} >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={3} style={{padding:0}} >
                                        <h2 style={{padding:'0 0 0 10px'}} > Total </h2>
                                    </Grid.Column>
                                    <Grid.Column width={12} style={{marginLeft:20,padding: '0'}} >
                                    <Collapsible trigger={<DropdownButtons  >Kshs. 750 <Icon name='dropdown' style={{marginLeft:30}}/></DropdownButtons>} triggerTagName='h3' link >
                                                <Grid width={16} >
                                                    <Grid.Row >
                                                        <Grid.Column width={5}  >
                                                            <Image src={v6} />
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Blueberries (2) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs. 600 </SubHeading>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={5}  >
                                                            <Image src={v7} />
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading>Bryan’s Bread (1) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs.70 </SubHeading>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={5}  >
                                                            <Image src={v8} />
                                                            <h3 style={{ textAlign: 'center', padding: '55px 0 0 0' }}> Total </h3>
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Bananas (2) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs. 80 </SubHeading>
                                                            <h3 style={{ padding: '27px 0 0 0' }}> Kshs. 750 </h3>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                        </Collapsible>
                                    </Grid.Column>
                                </Grid.Row>

                            </Grid>

                        </Grid.Column>

                        <Grid.Column width={5} style={{ textAlign: 'left' }}>
                            <h2> Monday 29th June 13:00 </h2>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row style={{margin : '30px 0 0 0'}} >

                    <Grid.Column width={4} style={{ padding: '0' }} >
                            <h2> 36221708 </h2>
                        </Grid.Column>

                        <Grid.Column width={7} style={{ padding: '0' }} >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={3} style={{padding:0}} >
                                        <h2 style={{padding:'0 0 0 10px'}} > Total </h2>
                                    </Grid.Column>
                                    <Grid.Column width={12} style={{marginLeft:20,padding: '0'}} >
                                    <Collapsible trigger={<DropdownButtons  >Kshs. 650 <Icon name='dropdown' style={{marginLeft:30}}/></DropdownButtons>} triggerTagName='h3' link >
                                                <Grid width={16} >
                                                    <Grid.Row >
                                                        <Grid.Column width={5}  >
                                                            <Image src={v6} />
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Blueberries (2) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs. 500 </SubHeading>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={5}  >
                                                            <Image src={v7} />
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading>Bryan’s Bread (1) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs.70 </SubHeading>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={5}  >
                                                            <Image src={v8} />
                                                            <h3 style={{ textAlign: 'center', padding: '55px 0 0 0' }}> Total </h3>
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Bananas (2) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs. 80 </SubHeading>
                                                            <h3 style={{ padding: '27px 0 0 0' }}> Kshs. 650 </h3>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                        </Collapsible>
                                    </Grid.Column>
                                </Grid.Row>

                            </Grid>

                        </Grid.Column>

                        <Grid.Column width={5} style={{ textAlign: 'left' }}>
                            <h2> Monday 29th June 13:00 </h2>
                        </Grid.Column>


                    </Grid.Row>

                    <Grid.Row style={{margin : '30px 0'}}>

                    <Grid.Column width={4} style={{ padding: '0' }} >
                            <h2> 36221708 </h2>
                        </Grid.Column>

                        <Grid.Column width={7} style={{ padding: '0' }} >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={3} style={{padding:0}} >
                                        <h2 style={{padding:'0 0 0 10px'}} > Total </h2>
                                    </Grid.Column>
                                    <Grid.Column width={12} style={{marginLeft:20,padding: '0'}} >
                                    <Collapsible trigger={<DropdownButtons  >Kshs. 850 <Icon name='dropdown' style={{marginLeft:30}}/></DropdownButtons>} triggerTagName='h3' link >
                                                <Grid width={16} >
                                                    <Grid.Row >
                                                        <Grid.Column width={5}  >
                                                            <Image src={v6} />
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Blueberries (2) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs. 600 </SubHeading>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={5}  >
                                                            <Image src={v7} />
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading>Bryan’s Bread (1) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs.70 </SubHeading>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={5}  >
                                                            <Image src={v8} />
                                                            <h3 style={{ textAlign: 'center', padding: '55px 0 0 0' }}> Total </h3>
                                                        </Grid.Column>
                                                        <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Bananas (2) </SubHeading>
                                                        </Grid.Column>
                                                        <Grid.Column width={5} style={{ textAlign: 'center' }} >
                                                            <SubHeading> Kshs. 180 </SubHeading>
                                                            <h3 style={{ padding: '27px 0 0 0' }}> Kshs. 850 </h3>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                        </Collapsible>
                                    </Grid.Column>
                                </Grid.Row>

                            </Grid>

                        </Grid.Column>

                        <Grid.Column width={5} style={{ textAlign: 'left' }}>
                            <h2> Monday 29th June 13:00 </h2>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row style={{marginTop:'50px'}}>
                        <Grid.Column style={{margin:'auto 0',textAlign:'right'}} width={6}>
                            <h2> Target for the week is Kshs. 6,000 </h2>
                        </Grid.Column>
                        <Grid.Column width={4} >
                            <Chart/>
                        </Grid.Column>
                        <Grid.Column style={{margin:'auto 0'}} width={6} >
                           <h2>  Total made Kshs. 2950 </h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row width={16} >
                       <Grid.Column width={5} style={{margin:'0 auto',textAlign:'center'}}>
                       <h2 > Ksh.3050 left to meet target </h2>
                        <h2> 49.16% of target met </h2>
                       </Grid.Column>
                    </Grid.Row>
                </Grid>
            </MainGrid>
        </div>
    )
} 