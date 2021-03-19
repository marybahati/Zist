import React from 'react';
import { Button, Grid, Image, } from 'semantic-ui-react';
import styled from 'styled-components';
import heroImg from './../../src/Assets/zister-personal-info.png';
import {ContinueButton} from './../components/Vendor/ContinueButton';
import History from './../History';
import history from './../History';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 10px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 70%;
    margin: 0 auto !important;
`;
const ButtonGrid = styled(Grid.Column)`
    width: 30%;
    margin: 0 auto !important;
`;
const GetStartedButton = styled(Button)`
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
const WelcomePage = (props) => {
    const handleRedirect = () => {
        History.push('/zister-personal-info')
    }
    return (
        <div> 
            <MainDiv>
                <MainGrid >
                    <Grid.Row>
                        <Grid.Column width={16} style={{textAlign:'center'}}>
                            <h2>Become a Zister on Zist Shopping</h2>
                            <h2> Become a Zister , earn money whilst putting smiles on Zist Shoppers! </h2>
                        </Grid.Column>                   
                   </Grid.Row>
                </MainGrid>
            </MainDiv>
            <Grid style={{ position: 'relative' }}>
                <Image src={heroImg} />
                <Grid.Row style={{ position: 'absolute', bottom: 0 }}> 
                    <ButtonGrid width={6} >
                            <GetStartedButton onClick={handleRedirect}> Get Started </GetStartedButton>
                    </ButtonGrid>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default WelcomePage