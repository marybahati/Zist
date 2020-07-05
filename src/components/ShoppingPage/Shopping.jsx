import React, { useState} from 'react'
import bgImage from './../../Assets/bgShopping.png'
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";
import styled from 'styled-components';
import cartImage from "./../../Assets/cart.png";
import card1 from './../../Assets/1.jpg';
import card2 from './../../Assets/2.jpg';
import card3 from './../../Assets/3.jpg';
import card4 from './../../Assets/4.jpg';
import card8 from './../../Assets/8.jpg';
import card9 from './../../Assets/9.jpg';
import card10 from './../../Assets/10.jpg';
import refineImage from './../../Assets/sort.svg'
import locationImage from './../../Assets/location.svg'
import scheduleImage from './../../Assets/schedule.svg'
import categoryImage from './../../Assets/category.svg'
import cart from "./../../Assets/searchCart.png";
import axios from 'axios';
import { RatedStars } from './Ratings';
import { SignupButtonSection } from '../LandingPage/SignupButtonSection';
import { LoginButtonSection } from '../LandingPage/LoginButtonSection';

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
    margin: 0;
`;
const SubHeading = styled.h4`
    margin: 0;
    color: grey;
`;
// const Gridcolumn = styled(Grid.Column)`
//     padding: 0;
// `;


export const Shopping = (props) => {
  const location = (props.location && props.location.state) || '';
  const [address, setAddress] = useState(location);

  return (
    <div >
      <Grid mobile={16} tablet={16} computer={16} style={{ textAlign: 'right', backgroundImage: `url(${bgImage})`, height: '1290px' }}>
        <Grid.Row width={12} style={{ backgroundColor: ""}} >
          <Grid.Column width={10} style={{ padding: '16px 0 0 0',textAlign: 'right'}}>
            <List style={{ display: 'inline-block' }}>
              <List.Item as='a' href='' style={{ paddingRight:'20px', fontSize: '20px', color: '#050504', textDecoration: 'underline', paddingTop: '80px' }}>
                HELP
            </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={2} style={{ padding: '5px 0 0 0',marginTop: '70px'}}>
              <SignupButtonSection  />
            </Grid.Column>

            <Grid.Column width={2} style={{ padding: '5px 0 0 0',marginTop: '70px'}} >
              <LoginButtonSection />
            </Grid.Column>

            <Grid.Column width={2} style={{padding: '0',marginTop: '60px'}} >
              <Image
              src={cartImage}
              style={{ display: "block", margin: '0 auto' }}
              />
            </Grid.Column>
        </Grid.Row>

         <Grid.Row width={16} style={{padding: '0 '}}>
        <Input labelPosition='right' type='search'
        style={{
          backgroundColor: "white",
          margin: "0 auto 0px auto",
          width: "50%",
          border: "1px solid #707070",
          fontSize:'20px',
          height:'90px '
        }}
        size="small"
         placeholder='SEARCH FOR A PLACE OR ITEM'>
          <Button type="submit" basic style={{paddingLeft:'30px',margin:'0'}}>
            <Icon size="big" color='black' name="search" link />
          </Button>
          <Image
              src={cart}
              style={{ display: "inline-block", 
              border:'0',width:'120px',height:'130px',margin:'0',paddingBottom:'35px' }}
            />
          <input type='search' style={{border:'0',paddingRight:'8px'}} name="searchOption" list="searchOption" />
        </Input>
        <datalist id="searchOption">
          <option value="Camaro"/>
          <option value="Corvette"/>
          <option value="Impala"/>
          <option value="Colorado"/>
        </datalist>
         </Grid.Row>

      </Grid>

      <Grid width={16} style={{  margin: '40px 0 0 80px' }}>

        <Grid.Row >
        <Input labelPosition='right' type='text'
        style={{
          backgroundColor: "white",
          width: "50%",
          fontSize:'20px'
        }}
        size="small"
        type="text"
        value={address}
        onChange={event => setAddress(event.target.value)}
        placeholder='Enter your address …'>
          <Label basic style={{margin:'0',border:'0',padding:'0',height:'30 !important',width:'30px'}}>
          <Image src={locationImage} />
          </Label>
          <input  style={{border:'0'}} />
        </Input>
        
        </Grid.Row>

        <Grid.Row >
        <SubHeading>Not sure of where to shop from? Here are some suggestions...</SubHeading>
        </Grid.Row>

        <Grid.Row style={{padding:'20px 0'}} width={16}>
          <Grid.Column style={{padding:'0'}} width={2}>
            <Image src={refineImage}/>
            <h4 style={{marginTop:'0'}}>Refine</h4>
          </Grid.Column>
        
          <Grid.Column style={{padding:0}} width={4} >
          <Grid >
            <Grid.Row>
              <Grid.Column width={2} style={{padding:'0',float:'right'}} >
              <Image src={locationImage}/>
              </Grid.Column>
              <Grid.Column width={14} style={{padding:'0'}}>
              <Dropdown text="Proximity" style={{ fontSize: '18px',color: '#050504'}}>
                <Dropdown.Menu >
                  <Dropdown.Item text="Shopping" />
                  <Dropdown.Item text="Zist Articles" />
                  <Dropdown.Item text="Zist Recipes" />
                  <Dropdown.Item text="Zist Mission & Vision" />  
                </Dropdown.Menu>
              </Dropdown>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Grid.Column>

          <Grid.Column style={{padding:0}} width={4} >
          <Grid >
            <Grid.Row>
              <Grid.Column width={2} style={{padding:'0',float:'right'}} >
              <Image src={categoryImage}/>
              </Grid.Column>
              <Grid.Column width={14} style={{padding:'0'}}>
              <Dropdown text="Niche" style={{ fontSize: '18px',color: '#050504'}}>
                <Dropdown.Menu >
                  <Dropdown.Item text="Shopping" />
                  <Dropdown.Item text="Zist Articles" />
                  <Dropdown.Item text="Zist Recipes" />
                  <Dropdown.Item text="Zist Mission & Vision" />  
                </Dropdown.Menu>
              </Dropdown>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Grid.Column>


          <Grid.Column style={{padding:0}} width={4} >
          <Grid >
            <Grid.Row>
              <Grid.Column width={2} style={{padding:'0',float:'right'}} >
              <Image src={scheduleImage}/>
              </Grid.Column>
              <Grid.Column width={14} style={{padding:'0'}}>
              <Dropdown text="Schedule" style={{ fontSize: '18px',color: '#050504'}}>
                <Dropdown.Menu >
                  <Dropdown.Item text="Shopping" />
                  <Dropdown.Item text="Zist Articles" />
                  <Dropdown.Item text="Zist Recipes" />
                  <Dropdown.Item text="Zist Mission & Vision" />  
                </Dropdown.Menu>
              </Dropdown>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Grid.Column>


        </Grid.Row>
  

        <div style={{padding:'0'}}>
        <CardHeading>Zist karibu</CardHeading>
        <CardSubHeading>Get fast from these outlets near you</CardSubHeading>
        </div>
        <Grid.Row width={16} style={{  margin: '0 0 50px 0' }} >
          <CardColumn width={7} style={{ margin: '0 89px 0 0' }}>
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
                  <RatedStars rating={3}/> 
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
                  <RatedStars rating={4}/>
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

        <div style={{padding:'0'}} >
        <CardHeading>All under one roof</CardHeading>
        <CardSubHeading> Shop from your favourite outlets within these malls. You need it, they got it! </CardSubHeading>
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
                  <RatedStars rating={5}/>               
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
                  <RatedStars rating={5}/>
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

        <div style={{padding:'0'}} >
        <CardHeading>organic please!</CardHeading>
        <CardSubHeading> Get organic produce from these open markets </CardSubHeading>
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
                  <RatedStars rating={3}/>
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
                  <RatedStars rating={3}/>
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

        <div style={{padding:'0'}} >
        <CardHeading>Local Shujaas </CardHeading>
        <CardSubHeading> Buy from Local shujaas shops  </CardSubHeading>
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
                  <RatedStars rating={4}/>
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
                 <RatedStars rating={4}/>
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