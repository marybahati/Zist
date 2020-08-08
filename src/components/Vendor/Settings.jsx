import React from 'react';
import { Grid, Button, Image,  } from 'semantic-ui-react';
import styled from 'styled-components';
import heroImage from './../../Assets/settings.png';

const MainDiv = styled.div`
   background: #F9F7F1 0% 0% no-repeat padding-box;
   opacity: 1;
   padding : 0 0 100px 0 !important;
`;
const MainGrid = styled(Grid)`
   width : 70%;
   margin: 0 auto !important;
`;
const TitleRows = styled(Grid.Row)`
   margin: ${props => props.spacer ? " 0 0 50px 0 !important" : "0 0 30px 0 !important"};
`;
const IntroHeading = styled.h1`
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
                    <h1> PERMISSIONS </h1>
                </TitleRows>
                <Grid.Row>
                    <h2> PEOPLE </h2>
                </Grid.Row>
                <SectionRows>
                    <Columns width={12} center >
                        <h2> Set who has access to manage Field Fresh Vegetables vendor account. </h2>
                    </Columns>
                    <Columns width={4} >
                        <ExpandButton> Expand </ExpandButton>
                    </Columns>
                </SectionRows>
                <Grid.Row>
                    <h2> WORKPLACE ANALYTICS. </h2>
                </Grid.Row>
                <SectionRows>
                    <Columns width={12} center >
                        <h2> Set who can view the analytics page </h2>
                    </Columns>
                    <Columns width={4} >
                        <ExpandButton> Expand </ExpandButton>
                    </Columns>
                </SectionRows>
                <Grid.Row>
                    <h2> PROFILE CUSTOMIZATION. </h2>
                </Grid.Row>
                <SectionRows>
                    <Columns width={12} center >
                        <h2> Set who can alter the image of the business on the storefront </h2>
                    </Columns>
                    <Columns width={4} >
                        <ExpandButton> Expand </ExpandButton>
                    </Columns>
                </SectionRows>
            </MainGrid>
        </MainDiv>
    )
}