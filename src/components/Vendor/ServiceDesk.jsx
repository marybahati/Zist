import React from 'react';
import { Modal, Header, Button, Icon, Grid, Image, Link, List } from 'semantic-ui-react';
import styled from 'styled-components';
import { RatedStars } from '../ShoppingPage/Ratings';
import user1 from './../../Assets/user1.png';
import user2 from './../../Assets/user2.png';
import user3 from './../../Assets/user3.png';

const MainDiv = styled.div`
   background: #F9F7F1 0% 0% no-repeat padding-box;
   opacity: 1;
   padding : 40px 0 100px 0 !important;
`;
const MainGrid = styled(Grid)`
   width : 70%;
   margin: 0 auto !important;
`;
const ReviewTitleRows = styled(Grid.Row)`
   margin: 60px 0 30px 0 !important;
`;
const CustomerProfile = styled(Grid.Row)`
   margin-bottom: 40px !important;
`;
const CustomerReply = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const CustomerMessage = styled(Grid.Row)`
   padding: 0 0 15px 14px !important;
`;
const DisputeLink = styled(List.Item)`
font-size: 20px;
color: black;
`;
// const CustomerImages = styled(Image)`
//    border-radius: 60% !important;
//    width: 200px !important;
// `;
export const ServiceDesk = () => {
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <h1> Fresh Field Vegetables’ Service Desk. </h1>
                </Grid.Row>
                <Grid.Row>
                    <h2> Current Rating : <RatedStars rating={4} /> (34)  </h2>
                </Grid.Row>
                <ReviewTitleRows>
                    <h2> Customer reviews </h2>
                </ReviewTitleRows>
                <Grid.Row>
                    <Grid>
                        <CustomerProfile>
                            <Grid.Column width={3} >
                                {/* <Image
                            src='https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
                            size='small'  circular
                            /> */}
                                <Image src={user1} />
                            </Grid.Column>
                            <CustomerReply width={13} >
                                <Grid stackable>
                                    <CustomerMessage>
                                        <Grid.Column width={3}  >
                                            <h3> Bryan </h3>
                                        </Grid.Column>
                                        <Grid.Column width={11}/>
                                        <CustomerReply width={2} >
                                            <Icon name='like' color='red' size='large' />
                                        </CustomerReply>
                                    </CustomerMessage>

                                    <CustomerMessage>
                                    <h3>
                                    Groceries were fresh , avocados were also pretty good had some for the
                                    night and others ripening for the next day.
                                    </h3>
                                    </CustomerMessage>
                                    <Grid.Row>
                                        <Grid.Column style={{textAlign:'right'}}>
                                            <List>
                                                <DisputeLink as='a' href='' >
                                                    Dispute
                                                </DisputeLink>
                                            </List>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </CustomerReply>
                        </CustomerProfile>
                        <CustomerProfile>
                            <Grid.Column width={3} >
                                <Image src={user2} />
                            </Grid.Column>
                            <CustomerReply width={13} >
                                <Grid stackable>
                                    <CustomerMessage >
                                        <Grid.Column width={3} >
                                            <h3> James </h3>
                                        </Grid.Column>
                                        <Grid.Column width={11}/>
                                        <CustomerReply width={2} >
                                            <Icon name='like' color='red' size='large' />
                                        </CustomerReply>
                                    </CustomerMessage>

                                    <CustomerMessage>
                                    <h3>
                                       The groceries were okay.
                                    </h3>
                                    </CustomerMessage>
                                    <Grid.Row>
                                        <Grid.Column style={{textAlign:'right'}}>
                                            <List>
                                                <DisputeLink as='a' href='' >
                                                    Dispute
                                                </DisputeLink>
                                            </List>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </CustomerReply>
                        </CustomerProfile>
                        <CustomerProfile>
                            <Grid.Column width={3} >
                                <Image src={user3} />
                            </Grid.Column>
                            <CustomerReply width={13} >
                                <Grid stackable>
                                    <CustomerMessage >
                                        <Grid.Column width={3}>
                                            <h3> Anne Marie </h3>
                                        </Grid.Column>
                                        <Grid.Column width={11}/>
                                        <CustomerReply width={2} >
                                            <Icon name='like' color='red' size='large' />
                                        </CustomerReply>
                                    </CustomerMessage>

                                    <CustomerMessage>
                                    <h3>
                                    New around here , found the groceries quite cheap and of relatively good 
                                    quality, Would totally recommend.
                                    </h3>
                                    </CustomerMessage>
                                    <Grid.Row>
                                        <Grid.Column style={{textAlign:'right'}}>
                                            <List>
                                                <DisputeLink as='a' href='' >
                                                    Dispute
                                                </DisputeLink>
                                            </List>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </CustomerReply>
                        </CustomerProfile>
                    </Grid>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}