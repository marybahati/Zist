import React from 'react';
import { Grid, Button, Image,Select,Icon  } from 'semantic-ui-react';
import styled from 'styled-components';
import heroImage from './../../Assets/settings.png';
import Collapsible from 'react-collapsible';

const MainDiv = styled.div`
   background: #F9F7F1 0% 0% no-repeat padding-box;
   opacity: 1;
   padding : 0 0 100px 0 !important;
`;
const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;

const MainGrid = styled(Grid)`
   width : 70%;
   margin: 0 auto !important;
`;
const TitleRows = styled(Grid.Row)`
   margin: ${props => props.spacer ? " 0 0 50px 0 !important" : "0 0 30px 0 !important"};
`;
const IntroHeading = styled.h2`
   font-weight: 900 !important;
   padding : 0  !important;
`;
const Columns = styled(Grid.Column)`
   padding: 0 !important;
   margin: ${props => props.center ? " auto 0  !important" : " 0 !important"};
`;
const ExpandButton = styled(Button)`
   border: 1px solid #707070 !important;
   width: 90%;
   margin: auto !important;
   background: #FFF !important;
   border-radius: 0 !important;
   padding: 18px 10px !important;
`;
const SectionRows = styled(Grid.Row)`
   margin: 0 0 40px !important;
`;
export const Settings = () => {
    const options = [
        { key: '7.00 am - 10.00am', value: '7.00 am - 10.00am', text: '7.00 am - 10.00am' },
        { key: '10.30 am - 12.00', value: '10.30 am - 12.00', text: '10.30 am - 12.00' },
        { key: '12.30pm - 4.00pm', value: '12.30pm - 4.00pm', text: '12.30pm - 4.00pm' },
        { key: '4.30pm - 6.00pm', value: '4.30pm - 6.00pm', text: '4.30pm - 6.00pm' },
      ]
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <Image src={heroImage} />
                </Grid.Row>
                <TitleRows spacer >
                    <IntroHeading> CONFIGURE EVERYTHING TO DO WITH YOUR BUSINESS AT THE TAP OF A BUTTON. </IntroHeading>
                </TitleRows>
                <TitleRows>
                    <h2> BUSINESS HOURS </h2>
                </TitleRows>
                <Grid.Row>
                    <h2> Set the hours your store will be open. </h2>
                </Grid.Row>
                <SectionRows>
                    <Columns width={12} center >
                    <Select placeholder='Select your time ' options={options} />
                    </Columns>
                </SectionRows>
                <Grid.Row>
                    <Grid.Column>
                         <Collapsible width={16} fluid trigger={<DropdownButtons >Account Settings <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                        <Grid width={16}  >
                            <Grid.Row >
                                <Grid.Column width={6} style={{paddingLeft:30}} >
                                    <h3>  Reset password </h3>
                                    <h3> Change Email </h3>
                                    <h3> Update business information </h3>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Collapsible>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                         <Collapsible width={16} fluid trigger={<DropdownButtons >Payment Details <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                        <Grid width={16}  >
                            <Grid.Row >
                                <Grid.Column width={6} style={{paddingLeft:30}}>
                                    <h3>  Mpesa  </h3>
                                    <h3> 0728201912 </h3>
                                    <h3> Adams arcade, ngong road </h3>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Collapsible>
                    </Grid.Column>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}