import React, { useState } from 'react';
import { Tab, Header, Button, Icon, Grid, Image, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import introImage from './../../Assets/analytics.png';
import transact from './../../Assets/transact.png';
import Analyse from './../../Assets/analyse.png';
import avocado from './../../Assets/avocados.png';
import rasberry from './../../Assets/rasberry.png';
import oranges from './../../Assets/oranges.png';
import LineGraph from './LineGraph';
import { Counter } from './Counter';
import { Transcations } from './Transcations';

const MainDiv = styled.div`
   background: #F9F7F1 0% 0% no-repeat padding-box;
   opacity: 1;
   padding : 0 0 100px 0 !important;
`;
const MainGrid = styled(Grid)`
   width : 70%;
   margin: 0 auto !important;
`;
const ReviewTitleRows = styled(Grid.Row)`
   margin: 60px 0 30px 0 !important;
`;
const TabPanels = styled(Tab.Pane)`
   margin: 60px 0 30px 0 !important;
   background:inherit !important;
   border:none !important;
   box-shadow:none !important;
`;
const ImageButtons = styled(Button)`
   background: inherit !important;
   font-size: 30px !important;
//    padding: 0 30px 0 0 !important;
   //    color: black;
//    &:active {
//     color: red !important; 
//   }
`;
const ProductColumns = styled(Grid.Column)`
   margin: auto 0  !important;
`;
const Columns = styled(Grid.Column)`
   padding:  0  !important;
`;
const Messages = styled(Message)`
   margin: 20px 0 !important;
   font-size: 17px !important;
`;
const Images = styled(Image)`
   width:  80%  !important;
`;
const SectionDiv = styled(Grid.Row)`
   margin:  0 0 60px 0  !important;
`;
const TitleRow = styled(Grid.Row)`
   margin:  0 0 40px 0  !important;
   padding: 0 !important;
`;
const TabGrid = styled(Grid)`
   margin: 0 !important;
`;
const TargetRow = styled(Grid.Row)`
   margin:  100px 0 0 0  !important;
   padding: 0 !important;
`;
const panes = [
    {
        menuItem: <ImageButtons><Image src={Analyse} /> Analytics </ImageButtons>,
        render: () => <TabPanels attached={false}>
            <TabGrid>
                <TitleRow>
                    <h2> STORE ANALYSIS </h2>
                </TitleRow>
                <SectionDiv>
                    <Grid>
                        <Grid.Row>
                            <h2> PRODUCT INTEL </h2>
                        </Grid.Row>
                        <Grid.Row>
                            <Columns width={4} >
                                <h2> Item on flashlight </h2>
                            </Columns>
                            <Grid.Column width={3} >
                                <h2> Avacados </h2>
                            </Grid.Column>
                            <Grid.Column width={5} >
                                <h2> Quantity sourced as <br /> from 10/06/2020 </h2>
                            </Grid.Column>
                            <Grid.Column width={4} >
                                <h2> Quantity sold by <br /> 01/07/2020 </h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Columns width={4} >
                                <Images src={avocado} />
                            </Columns>
                            <ProductColumns width={3} >
                                <h2> Hass </h2>
                                <h2> Fuerte </h2>
                            </ProductColumns>
                            <ProductColumns width={5} >
                                <h2> 150 pieces </h2>
                                <h2> 75 pieces </h2>
                            </ProductColumns>
                            <ProductColumns width={4} >
                                <h2> 130 </h2>
                                <h2> 45 </h2>
                            </ProductColumns>
                        </Grid.Row>
                        <Grid.Row>
                            <Messages icon >

                                <Message.Content>
                                    <Message.Header>
                                        Hass avocados seem to be more marketable than Fuerte ,
                                        the current ratio of requesting being 2:1 has yielded a 86.7% sales
                                        rate in sales of Hass avocados as opposed to 60% On the fuerte avocados ,
                                        we suggest upping the request ratio to 3:1
                            </Message.Header>
                                </Message.Content>
                                <Icon name='exclamation circle ' />
                            </Messages>
                        </Grid.Row>
                    </Grid>
                </SectionDiv>
                <SectionDiv>
                    <Grid>
                        <Grid.Row>
                            <h2> Slow moving stock </h2>
                        </Grid.Row>
                        <Grid.Row>
                            <Columns width={4} >
                                <h2> Item on flashlight </h2>
                            </Columns>
                            <Grid.Column width={3} >

                            </Grid.Column>
                            <Grid.Column width={5} >
                                <h2> Quantity sourced as <br /> from 10/06/2020 </h2>
                            </Grid.Column>
                            <Grid.Column width={4} >
                                <h2> Quantity sold by <br /> 01/07/2020 </h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Columns width={4} >
                                <Images src={rasberry} />
                            </Columns>
                            <ProductColumns width={3} >
                                <h2> Raspberries </h2>
                            </ProductColumns>
                            <ProductColumns width={5} >
                                <h2> 30 packs </h2>
                            </ProductColumns>
                            <ProductColumns width={4} >
                                <h2> 10 packs </h2>
                            </ProductColumns>
                        </Grid.Row>
                        <Grid.Row>
                            <Messages icon >

                                <Message.Content>
                                    <Message.Header>
                                        Raspberries have been the commodity with the most surplus , we suggest
                                        packaging them in an offer , maybe by discounting them or pairing them with
                                        products that can go hand in hand with them I.e blueberries.
                            </Message.Header>
                                </Message.Content>
                                <Icon name='exclamation circle ' />
                            </Messages>
                        </Grid.Row>
                    </Grid>
                </SectionDiv>
                <SectionDiv>
                    <Grid>
                        <Grid.Row>
                            <h2> Depleting stock </h2>
                        </Grid.Row>
                        <Grid.Row>
                            <Columns width={4} >
                                <h2> Item on flashlight </h2>
                            </Columns>
                            <Grid.Column width={3} >

                            </Grid.Column>
                            <Grid.Column width={5} >
                                <h2> Quantity sourced as <br /> from 10/06/2020 </h2>
                            </Grid.Column>
                            <Grid.Column width={4} >
                                <h2> Quantity sold by <br /> 01/07/2020 </h2>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Columns width={4} >
                                <Images src={oranges} />
                            </Columns>
                            <ProductColumns width={3} >
                                <h2> Oranges </h2>
                            </ProductColumns>
                            <ProductColumns width={5} >
                                <h2> 250 pieces </h2>
                            </ProductColumns>
                            <ProductColumns width={4} >
                                <h2> 210 pieces </h2>
                            </ProductColumns>
                        </Grid.Row>
                        <Grid.Row>
                            <Messages icon >
                                <Message.Content>
                                    <Message.Header>
                                        On average , over a span of 21 days , 10 oranges have been sold Per day.
                                        The supply is expected to deplete in 4 days. We suggest Making a request
                                        for additional supply.
                                    </Message.Header>
                                </Message.Content>
                                <Icon name='exclamation circle ' />
                            </Messages>
                        </Grid.Row>
                    </Grid>
                </SectionDiv>
                <Grid.Row>
                    <LineGraph />
                </Grid.Row>
                <TargetRow>
                    <h2> TARGET </h2>
                </TargetRow>
                <Grid.Row>
                    <Messages  >
                        <Message.Content>
                            <Message.Header>
                            Sales from last week starting from Sunday 26th July to 1st August Amassed to
                            7,000 Kshs, your target for the week was kshs. 6,500. Congratulations on 
                            surpassing your target !
                            </Message.Header>
                        </Message.Content>
                    </Messages>
                </Grid.Row>
                <Grid.Row>
                    <h2> SET TARGET FOR THE UPCOMING WEEK </h2>
                </Grid.Row>
                <Grid.Row>
                    <h3> SUGGESTION (KSHS.7,000) </h3>
                </Grid.Row>

                <Counter/>

            </TabGrid>
        </TabPanels>,
    },
    {
        menuItem: <ImageButtons><Image src={transact} /> Transcation </ImageButtons>,
        render: () => <TabPanels attached={false} ><Transcations/> </TabPanels>,
    }
]

export const Analytics = () => {
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <Image src={introImage} />
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column style={{ textAlign: 'center' }} >
                        <h2 >
                            STAY ON TOP OF THE DAY TO DAY PART OF THE BUSINESS.
                        </h2>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Columns >
                        <Tab menu={{ text: true, color: 'orange' }} panes={panes} />
                    </Columns>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}