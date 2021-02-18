import React, { useState } from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import addButton from './../../Assets/add.png'
import bananas from './../../Assets/bananas.png'
import strawberries from './../../Assets/strawberries.png'
import blueBerries from './../../Assets/blue-berries.png'
import DatePicker from 'react-date-picker';
import history from './../../History';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const Icons = styled(Grid.Column)`
  padding: 0 ;
  text-align: center;
`;
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
`;
const Buttons = styled(Button)`
    background: #FEE2D4 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4;
    opacity: 1;
    height: 80px !important;
    width: 70%;
    font-size: 22px !important;
    color: #050504 !important;
    margin: 20px 0 40px 0 !important;
`;
const Suppliers = () => {
    const [date, setDate] = useState(new Date());
    const [editDate, setEditDate] = useState(false)

    const handleDateEdit = () => {
        setEditDate(true)
    }
    const handleGoingBack = () => {
        history.goBack()
    }
    return (
        <MainDiv>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={1} />
                    <Grid.Column>
                        <Icons width={1}>
                            <Button style={{ background: 'inherit' }} onClick={handleGoingBack}>  <Icon name='chevron left' size='large' link /> </Button>
                        </Icons>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <MainGrid>
                <Grid.Row>
                    <Grid.Column>
                        <h1 style={{ textAlign: "center", textDecoration: 'underline' }}> Suppliers </h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2>
                            Send an invite to your Current suppliers to come into the platform
                            and make business happen fast and easy.
                    </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2 style={{ textAlign: "center", textDecoration: 'underline' }}> JOIN ZIST SHOPPING AS A SUPPLIER </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2 style={{ textAlign: "center", paddingBottom: 40 }}>
                            Browse through these approved Zist Suppliers.
                    </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Image src={strawberries} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={7}>
                                    <h2> Lucie's Strawberry </h2>
                                </Grid.Column>
                                <Grid.Column width={1} />
                                <Grid.Column width={7}>
                                    <h2> Kshs. 200/pack </h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={15}>
                                    <h2>
                                        Quality berries from Baba Dogo, able to handle up to 30 packs per day.
                                        Wholesale price @ 100/pack.
                                    </h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={7}>
                                    <Buttons> Message </Buttons>
                                </Grid.Column>
                                <Grid.Column width={1} />
                                <Grid.Column width={8}>
                                    <Buttons> Ask for sample </Buttons>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Image src={bananas} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={7}>
                                    <h2> Daves's Bananas </h2>
                                </Grid.Column>
                                <Grid.Column width={1} />
                                <Grid.Column width={7}>
                                    <h2> Kshs. 100/pack </h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={15}>
                                    <h2>
                                        Fresh nuts made and packaged at Tigoni Factory in Thika, able to handle any number of orders.
                                        Wholesale price ; 200 shillings/ pack.
                                    </h2>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={7}>
                                    <Buttons> Message </Buttons>
                                </Grid.Column>
                                <Grid.Column width={1} />
                                <Grid.Column width={8}>
                                    <Buttons> Ask for sample </Buttons>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}

export default Suppliers