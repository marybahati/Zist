import React from 'react'
import bgImage from './../../Assets/bgShopping.png'
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";
import styled from 'styled-components';
import cartImage from "./../../Assets/cart.png";
import { LoginButton } from './../LandingPage/LoginButton';
import { SignUpButton } from './../LandingPage/SignUpButton';
import card1 from './../../Assets/1.jpg';
import card2 from './../../Assets/2.jpg';
import card3 from './../../Assets/3.jpg';
import card4 from './../../Assets/4.jpg';
import card8 from './../../Assets/8.jpg';
import card9 from './../../Assets/9.jpg';
import card10 from './../../Assets/10.jpg';
import StarRatings from 'react-star-ratings';

const CardColumn = styled(Grid.Column)`
    margin-bottom: 100px;
    padding: 0 !important;
`;
const CardHeading = styled.h2`
    font-size: 20px !important ;
    text-decoration: underline;
    margin: 0 0 8px 0;
`;
const CardSubHeading = styled.h4`
    color: grey;
    margin: 0;
`;

export const Shopping = () => {
  return (
    <div >
      <Grid  style={{ backgroundColor: "", textAlign: 'right', backgroundImage: `url(${bgImage})`, height: '1290px' }}>
        <Grid.Row width={16} >
          <Grid.Column width={16} style={{ display: 'inline-block', paddingRight: '40px' }}>
            <List style={{ display: 'inline-block' }}>
              <List.Item as='a' href='' style={{ paddingRight: '30px', fontSize: '20px', color: '#050504', textDecoration: 'underline', paddingTop: '80px' }}>
                HELP
            </List.Item>
            </List>
            <LoginButton />
            <SignUpButton />

            <Image
              src={cartImage}
              style={{ display: "inline-block", margin: " 0 30px 0 18px" }}
            />
          </Grid.Column>
        </Grid.Row>

         <Grid.Row width={16} style={{padding: '0 ',backgroundColor: ""}}>
         {/* <Input
        transparent
        style={{
          backgroundColor: "white",
          margin: "80px auto 0px auto",
          width: "45%",
          border: "1px solid #707070",
          fontSize:'30px',
          height:'90px '
        }}
        size="massive"
        type="search"
        // value={location}
        // onChange={event => setLocation(event.target.value)}
        action={
          <Button type="submit" basic>
            <Icon size="huge" color="orange" name="angle right" link />
          </Button>
        }
        icon="search"
        iconPosition="left"
        placeholder="Enter your address …"
      />
       */}
        <Input labelPosition='right' type='search'
        style={{
          backgroundColor: "white",
          margin: "0 auto 0px auto",
          width: "50%",
          border: "1px solid #707070",
          fontSize:'30px',
          height:'90px '
        }}
        size="medium"
         placeholder='Amount'>
          <Button type="submit" basic style={{paddingLeft:'50px',margin:'0'}}>
            <Icon size="huge" color='black' name="search" link />
          </Button>
          <input type='search'/>
          <Image
              src={cartImage}
              style={{ display: "inline-block", margin: " 0 30px 0 18px" }}
            />
          
        </Input>
         </Grid.Row>

      </Grid>

      <Grid width={16} style={{  margin: '40px 0 0 80px' }}>
        {/* <Grid.Row style={{ background: '' }}>icons  will be here</Grid.Row> */}
        <div>
        <CardHeading>Zist karibu</CardHeading>
        <CardSubHeading> welcome to zist karibu shopping </CardSubHeading>
        </div>
        <Grid.Row width={16} style={{  margin: '0 0 50px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 0' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card1} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Brandy's Deli <Icon name='check circle' color='yellow' /></Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  All your utilities in one place
                  </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={3}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                 
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                  <List.Item >utilities</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 50px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card3} wrapped ui={false} />
              <Card.Content>
                <Card.Header>The freshest grocery shop <Icon name='check circle' color='yellow' /> </Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  High quality groceries from local producers
                </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={4}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                 
                </Grid.Column>
                </Grid.Row>
                </Grid>
              
                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>

        <div>
        <CardHeading>Zist karibu</CardHeading>
        <CardSubHeading> welcome to zist karibu shopping </CardSubHeading>
        </div>
        <Grid.Row width={16} style={{ background: '', margin: '0 0 50px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 0' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card2} wrapped ui={false} />
              <Card.Content>
                <Card.Header>The freshest grocery shop <Icon name='check circle' color='yellow' /></Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  High quality groceries from local producers
                </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={5}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                 
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 30px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card4} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Mall A <Icon name='check circle' color='yellow' /> </Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  With unique shops only on zist
                </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={5}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                 
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                  <List.Item >utilities</List.Item>
                  <List.Item >health</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>

        <div>
        <CardHeading>Zist karibu</CardHeading>
        <CardSubHeading> welcome to zist karibu shopping </CardSubHeading>
        </div>
        <Grid.Row width={16} style={{ background: '', margin: '0 0 50px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 0' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card8} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Valery Fresh Produce <Icon name='check circle' color='yellow' /></Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  Fresh produce from real farms
                </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={3}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 30px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card8} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Muthoni's Groceries <Icon name='check circle' color='yellow' /> </Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  freshly sourced produce
                </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={3}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>

        <div>
        <CardHeading>Zist karibu</CardHeading>
        <CardSubHeading> welcome to zist karibu shopping </CardSubHeading>
        </div>
        <Grid.Row width={16} style={{ background: '', margin: '0 0 50px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 0' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card9} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Maguna's kiosk <Icon name='check circle' color='yellow' /></Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  Wide variety of goods
                </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={4}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 30px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card10} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Jack's butchery(meat market) <Icon name='check circle' color='yellow' /> </Card.Header>
                <Grid>
                <Grid.Row width={16} style={{marginTop:'15px',marginBottom:'5px'}}>
                <Grid.Column width={10} >
                <h4>
                  Fresh meat from organic farmers
                </h4>
                </Grid.Column>
                <Grid.Column width={6} style={{textAlign:'center'}}>
                
                <StarRatings
                  rating={4}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension="20px"
                  starSpacing="2px"
                />
                
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >meat</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>


      </Grid>
    </div>
  )
}