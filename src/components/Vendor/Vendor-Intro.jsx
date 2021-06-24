import React,{useState} from 'react'
import { Grid, Image, Button, Icon } from "semantic-ui-react";
import styled from 'styled-components';
import vendor from './../../Assets/vendor-img.png';
import history from '../../History';

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
    @media only screen and (max-width: 768px) {
        font-size: 18px !important;
        height: 66px !important;
    }
`;
const Icons = styled(Grid.Column)`
  padding: 0 0 0 30px ;
  text-align: center;
`;

const VendorIntro = (props) => {
    const [view,setView] =  useState(false)
    const handleGoingBack = () => {
        history.goBack()
    }
    const handleRedirect = () => {
        history.push('/vendor')
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
                    <IntroColumn>
                        <h1> Become a Vendor on Zist Shopping. </h1>
                    </IntroColumn>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2> Partner with Zist Shopping today! Get to reach customers you’d otherwise never have reached ,
                            manage your inventory in a stress-free way, find suppliers and so much more! </h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <CenteredColumn width={16}>
                        <Image src={vendor} />
                    </CenteredColumn>
                </Grid.Row>
                <Grid.Row>
                    <CenteredColumn width={5}>
                        <Buttonx onClick={handleRedirect}> Get Started </Buttonx>
                    </CenteredColumn>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default VendorIntro