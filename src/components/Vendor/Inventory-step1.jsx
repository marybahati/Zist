import React, { useState } from 'react'
import { Grid, Image, Button, Icon, Form } from "semantic-ui-react";
import styled from 'styled-components';
import shelving from './../../Assets/shelving.png';
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
const IntroColumn = styled(Grid.Column)`
    width: 60% !important;
    margin: 0 auto !important;
    text-align: center  !important;
`;
const CenteredColumn = styled(Grid.Column)`
    margin: 0 auto !important;
`;
const Buttonx = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 90px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 50px 0 !important;
`;
const Icons = styled(Grid.Column)`
  padding: 0 0 0 30px ;
  text-align: center;
`;
const Columns = styled(Grid.Column)`
   margin: 0 auto !important;
`;
const DoneButton = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 20px 0 !important;
`;

const Step1 = (props) => {
    const [view, setView] = useState(false)
    const handleGoingBack = () => {
        history.goBack()
    }
    const handleRedirect = () => {
        history.push('/inventory-step2')
    }
    return (
        <MainDiv>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={2}>
                        <Icons width={1}>
                            <Button style={{ background: 'inherit' }} onClick={handleGoingBack}>  <Icon name='chevron left' size='large' link color='black' /> </Button>
                        </Icons>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <MainGrid>
                <Grid.Row>
                    <CenteredColumn width={6}>
                        <Image src={shelving} />
                        <h2 style={{ color: 'orange',textAlign:'center' }}> SHELVING </h2>
                    </CenteredColumn>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{ paddingBottom: 50 }}>
                        <h1> Welcome to Shelving where putting up your wares is all within a button’s reach. </h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2> Step 1 </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2>Structure out your aisles to segment your products for easy curation by the customer just
                        like you’d do in a physical Brick and mortar store.
                         </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Columns width={7}>
                        <Form onSubmit={handleRedirect}>
                            <Form.Field required >
                                <h2> Create a new aisle </h2>
                                <input required placeholder='Add a new product category' style={{ padding: '15px 20px' }} />
                                <input required placeholder='decription' style={{ padding: '15px 20px',margin:'20px 0 0 0' }} />
                            </Form.Field>
                            <DoneButton type='submit' > DONE </DoneButton>
                        </Form>
                    </Columns>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default Step1