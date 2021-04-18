import React, { useState,useEffect } from 'react'
import { Grid, Image, Button, List } from "semantic-ui-react";
import styled from 'styled-components';
import { RatedStars } from '../ShoppingPage/Ratings';
import business from './../../Assets/user-list-business.png';
import storefront from './../../Assets/d1.png';
import inventory from './../../Assets/d2.png';
import serviceDesk from './../../Assets/d3.png';
import analytics from './../../Assets/d4.png';
import history from './../../History';
import { withCookies } from 'react-cookie';
import {HOST_API} from './../../endpoints';
import axios from 'axios';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const CenteredColumn = styled(Grid.Column)`
    margin: auto 0  !important;
`;
const ImageButtons = styled(Button)`
    background: inherit !important;
`;
const Headers = styled.h1`
text-align: center;
text-decoration: underline;
color: #FFBD59;
`;
const Links = styled(List.Item)`
color: #FFBD59;
font-size: 20px;
padding: 50px 0 !important;
`

const Dashboard = (props) => {
    const { cookies } = props
    const userData = cookies.get('login-res')
    const id = cookies.get('business-id')
    const token = userData?.access 
    const [info,setInfo] = useState()
    console.log(info)
    useEffect(() => {
        axios.get(HOST_API +`zist/vendor/business/${id}/`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then((res) => {
      setInfo(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
    }, []);
    const analyticsRedirect = () => {
        history.push('/vendor-analytics')
    }
    const serviceRedirect = () => {
        history.push('/vendor-service-desk')
    }
    const inventoryRedirect = () => {
        history.push('/inventory-step1')
    }
    const settingsRedirect = () => {
        history.push('/vendor-settings')
    }
    const storefrontRedirect = () => {
        history.push('/vendor-store-front')
    }
    const announcementsRedirect = () => {
        history.push('/vendor-announcements')
    }
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Image src={business} />
                    </Grid.Column>
                    <CenteredColumn width={12}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <h1> {info?.name} </h1>
                                    <h2>{info?.bio} </h2>
                                    <List bulleted horizontal >
                                        <List.Item ></List.Item>
                                        <List.Item style={{ fontSize: 20 }}> {info?.business_type} </List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <h2> Current Rating; </h2>
                                    <RatedStars rating={5} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <h2> “Congrats on becoming a Vendor , we value our partnership!.” </h2>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </CenteredColumn>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 50 }}>
                    <Grid.Column width={7}>
                        <ImageButtons onClick={storefrontRedirect}>
                            <Image src={storefront} />
                            <Headers> Storefront </Headers>
                        </ImageButtons>
                        <h3> Just like a physical storefront , the digital storefront is how You introduce your business to
                        potential customers. With selection of profile image , small description of Your business and
                        classification of items , stand out Just like you’d do with a flashy neon sign.
                        </h3>
                    </Grid.Column>
                    <Grid.Column width={2} />
                    <Grid.Column width={7}>
                        <ImageButtons onClick={inventoryRedirect}>
                            <Image src={inventory} />
                            <Headers> Inventory </Headers>
                        </ImageButtons>
                        <h3> The days of managing your inventory by book and pen are over! With Zist Inventory get to put all your
                        items onto your digital shelf ,arrange them into aisles for easy curation by the customer ; with
                        opportunities to get Supplies within the platform, business will never be the same again.
                        </h3>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 50 }}>
                    <Grid.Column width={7}>
                        <ImageButtons onClick={serviceRedirect}>
                            <Image src={serviceDesk} />
                            <Headers> Service Desk </Headers>
                        </ImageButtons>
                        <h3> There’s no business without customers, with service desk get to receive feedback
                        that helps you improve , dispute any wrong ratings / comments , also in
                        specialised situations have one/one conversations with customers to suggest what
                        it is they might need.
                        </h3>
                    </Grid.Column>
                    <Grid.Column width={2} />
                    <Grid.Column width={7}>
                        <ImageButtons onClick={analyticsRedirect}>
                            <Image src={analytics} />
                            <Headers> Analytics </Headers>
                        </ImageButtons>
                        <h3> Make informed decisions when it comes to product, see how your items are
                        performing within specific time periods. get to align your business with customer
                        needs, also with patterns see when particular stock will be depleted.
                        </h3>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{textAlign:'center'}}>
                        <List  link >
                            <Links as='a' href='vendor-settings' > Settings </Links> 
                        </List>
                        <List  link >
                            <Links as='a' href='' > Share a link to your store </Links> 
                        </List>
                        <List  link >
                            <Links as='a' href='' > Log Out </Links>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default withCookies(Dashboard)