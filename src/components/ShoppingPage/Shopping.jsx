import React, { useState, useEffect } from 'react'
// import bgImage from './../../Assets/shopping-hero-img.png'
import bgImage from './../../Assets/shopping1.png'
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List,  Card, Menu } from "semantic-ui-react";
import styled from 'styled-components';
import cartImage from "./../../Assets/cart.png";
import store from './../../Assets/store.png';
import card2 from './../../Assets/2.jpg';
import card4 from './../../Assets/4.jpg';
import refineImage from './../../Assets/sort.svg'
import locationImage from './../../Assets/location.svg'
import scheduleImage from './../../Assets/schedule.svg'
import categoryImage from './../../Assets/category.svg'
import cart from "./../../Assets/searchCart.png";
import axios from 'axios';
import { RatedStars } from './Ratings';
import { SignupButtonSection } from '../LandingPage/SignupButtonSection';
import { LoginButtonSection } from '../LandingPage/LoginButtonSection';
import { withCookies } from 'react-cookie';
import History from '../../History';
import { HOST_API } from './../../endpoints';

const CardColumn = styled(Grid.Column)`
    margin-bottom: 100px;
    padding: 0 !important;
`;
const Rows = styled(Grid.Row)`
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
const SubHeading = styled.h3`
    margin: 0;
    color: grey;
    padding:0 0 15px 0;
    
`;
const SelectDropdown = styled(Dropdown)`
    margin: auto !important;
    // padding: 20px 20px !important;
    border: none !important;
    box-shadow: none !important;
`;


const Shopping = (props) => {
  const { cookies } = props
  const userData = cookies.get('login-res')
  const token = userData?.access
  const names = cookies.get('name')
  const splitName = names?.split(' ')
  const name = splitName !== undefined ? splitName[0] : null 
  console.log(names, name)
  const location = (props.location && props.location.state) || '';
  const [address, setAddress] = useState(location);
  const [loggedIn, setLoggedIn] = useState(false);
  const [business, setBusiness] = useState('')
  const [clickedBusiness, setClickedBusiness] = useState([])
  const [businesses, setBusinesses] = useState([])
  console.log(token, business)

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true,
  }

  const fetchBusinesses = () => {
    axios.get(HOST_API + 'zist/business/',
      {
        headers: headers
      }
    )
      .then(res => {
        console.log(res.data.results)
        setBusinesses(res.data.results)
      })
      .catch(error => {
        return []
        console.log(error)
      })
  }
  useEffect(() => {
    fetchBusinesses()
  }, [])

  const optionsResults = businesses?.map(x => ({ text: x.name, value: x.name, image: { src: card4 } }))


  const countryOptions = [
    { text: 'fruits', value: 'fruits', image: { src: card4 } },
    { text: 'vegetables', value: 'vegetables', image: { src: card4 } },
    { text: 'cakes', value: 'cakes', image: { src: card4 } },
    { text: 'chocaolates', value: 'chocolates', image: { src: card4 } },
    { text: 'flour', value: 'flour', image: { src: card4 } },
  ]
  const handleLogOut = () => {
    cookies.remove('login-res',{path: '/'})
    window.location.reload(false);
  }
  const handleCardClicked = (e, name, type) => {
    const d = { name: name, type: type }
    History.push({
      pathname: '/user-list',
      state: d
    });
  }
  const handleSelectedBusiness = (e,{value}) => {
    setBusiness({business:value})
    History.push({
      pathname: '/user-list',
      state: {name: value}
    });
  }
  console.log(business)
  return (
    <div >
      <Grid mobile={16} tablet={16} computer={16} style={{ textAlign: 'right', backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center',height: 650, width: '100% !important'}}>

        {token === undefined || token === '' ? (
          <Grid.Row width={16} >
            <Grid.Column >
              <Grid >
                <Grid.Row style={{ padding: '0' }}>
                  <Grid.Column width={10}>
                  </Grid.Column>
                  <Grid.Column width={2} style={{ padding: '15px 0 0 0', marginTop: '20px' }}>
                    <SignupButtonSection />
                  </Grid.Column>
                  <Grid.Column width={2} style={{ padding: '15px 0 0 0', marginTop: '20px' }} >
                    <LoginButtonSection />
                  </Grid.Column>
                  <Grid.Column width={2} style={{ padding: '15px 0 0 0', marginTop: '20px' }} >
                    <Image
                      src={cartImage}
                      style={{ display: "block", margin: '0 auto' }}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>

            </Grid.Column>
          </Grid.Row>

        ) : (
            <Grid.Row width={16} >
              <Grid.Column >
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <List style={{ display: 'inline-block' }}>
                        <List.Item as='a' href='' style={{ paddingRight: '20px', fontSize: '20px', color: '#050504', textDecoration: 'underline', paddingTop: '30px' }}>
                          HELP
                  </List.Item>
                      </List>
                    </Grid.Column>
                    {name == undefined || name == '' ? (
                      <Grid.Column width={2}>
                        <Grid.Row>
                          <Grid.Column width={1} style={{ paddingTop: '15px' }}>
                            <Grid>
                              <Grid.Row>
                                <Grid.Column width={8}>
                                  <Icon name='user circle' color='black' size='huge' />
                                </Grid.Column>
                                <Grid.Column width={8} style={{ paddingTop: '20px' }}>
                                  <Menu size='huge' style={{ background: 'inherit', border: 'none', boxShadow: 'none' }} >
                                    <Menu.Menu >
                                      <Dropdown text='Account' icon='' >
                                        <Dropdown.Menu>
                                          <Dropdown.Item as='a' href='/update-profile'> Update Profile </Dropdown.Item>
                                          <Dropdown.Item onClick={handleLogOut}> Log out </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </Menu.Menu>
                                  </Menu> 
                               </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid.Column>
                    ) : (
                        <Grid.Column width={2} style={{ paddingTop: '27px',textAlign:'center' }} >
                          <Grid>
                          <Grid.Row>
                            <Grid.Column>
                              <h2> {name} </h2>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                        </Grid.Column>
                      )}
                    <Grid.Column width={1} style={{ paddingTop: '13px' }}>
                      <Image
                        src={cartImage}
                        style={{ display: "block", margin: '0 auto' }}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          )}
        <Grid.Row width={16} style={{ padding: '0 ',margin:'auto 0 !important' }}>

          <Input labelPosition='right' type='search'
            style={{
              backgroundColor: "white",
              margin: "0 auto 0px auto",
              width: "50%",
              border: "1px solid #707070",
              fontSize: '20px',
              height: '90px ',
              padding: 0,
              top: '-70px',
            }}
            size="small"
            placeholder='SEARCH FOR A PLACE OR ITEM'>
            <Button type="submit" basic style={{ paddingLeft: '30px', margin: '0' }}>
              <Icon size="big" color='black' name="search" link />
            </Button>
            <Image
              src={cart}
              style={{
                display: "inline-block",
                border: '0', width: '120px', height: '130px', margin: '0', paddingBottom: '35px'
              }}
            />
            <SelectDropdown
              placeholder='SEARCH FOR A PLACE OR AN ITEM'
              noResultsMessage={`Oops ! Looks like our search came back empty… We suggest checking the spelling or searching for something else`}
              openOnFocus={false}
              scrolling
              fluid
              selection
              options={optionsResults}
              onChange={handleSelectedBusiness}
              clearable
              search
              style={{ padding: '2rem !important',width: '100%' }}
            />
            {/* <input type='search' style={{ border: '0', paddingRight: '8px' }} name="searchOption" list="searchOption" /> */}
          </Input>
          <datalist id="searchOption">
            <option value="Camaro" style={{ background: `${card2}` }}>
              {/* <Grid>
                <Grid.Row>
                  <Grid.Column width={6}>
                        <Image src={card2} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <h3> vegetable store </h3>
                  </Grid.Column>
                </Grid.Row>
              </Grid> */}
            </option>
            <option value="Corvette" />
            <option value="Impala" />
            <option value="Colorado" />
          </datalist>
        </Grid.Row>

      </Grid>

      <Grid width={16} style={{ margin: '40px 80px' }} >

        {/* <div id='location' > */}
        <Grid.Row id='location' style={{ padding: '0 0 10px 0px ' }}>
          <Input labelPosition='right' type='text'
            style={{
              backgroundColor: "white",
              width: "50%",
              fontSize: '20px'
            }}
            size="small"
            type="text"
            value={address}
            onChange={event => setAddress(event.target.value)}
            placeholder='Enter your address …'>
            <Label basic style={{ margin: '0', border: '0', padding: '0', height: '30 !important', width: '30px' }}>
              <Image src={locationImage} />
            </Label>
            <input style={{ border: '0' }} />
          </Input>

        </Grid.Row>
        {/* </div> */}

        <Grid.Row style={{ padding: '10px 0 15px 0px ' }}>
          <SubHeading>Want a look around ? Here are some suggestions to get you started.</SubHeading> <br />
        </Grid.Row>

        {/* <Rows style={{ padding: '20px 0 20px 0px', textAlign: 'center !important ' }} width={16}>
          <Grid.Column style={{ padding: '0' }} width={2}>
            <Image src={refineImage} />
            <h4 style={{ marginTop: '0' }}>Refine</h4>
          </Grid.Column>

          <Grid.Column style={{ padding: 0 }} width={3} >
            <Grid >
              <Grid.Row>
                <Grid.Column width={2} style={{ padding: '0', float: 'right' }} >
                  <Image src={locationImage} />
                </Grid.Column>
                <Grid.Column width={14} style={{ padding: '0' }}>
                  <Dropdown text="Proximity" style={{ fontSize: '18px', color: '#050504' }}>
                    <Dropdown.Menu >
                      <Dropdown.Item text="2 km radius" />
                      <Dropdown.Item text="Near ngong road" />
                      <Dropdown.Item text="around CBD " />
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column style={{ padding: 0 }} width={3} >
            <Grid >
              <Grid.Row>
                <Grid.Column width={2} style={{ padding: '0', float: 'right' }} >
                  <Image src={scheduleImage} />
                </Grid.Column>
                <Grid.Column width={14} style={{ padding: '0' }}>
                  <Dropdown text="Schedule" style={{ fontSize: '18px', color: '#050504' }}>
                    <Dropdown.Menu >
                      <Dropdown.Item text="8.00 A.M" />
                      <Dropdown.Item text="10.00 A.m" />
                      <Dropdown.Item text="1.00 P.M" />
                      <Dropdown.Item text="4.00 P.M" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>

        </Rows> */}


        <Grid.Row style={{ padding: '0 0 10px 0px ' }}>
          <Grid.Column style={{ padding: '30px 0 0 0' }} width={14} >
            <CardHeading>Zist karibu</CardHeading>
            <CardSubHeading>Get fast from these outlets near you</CardSubHeading>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {businesses?.map(business => {
            return (
              <CardColumn width={5} style={{ margin: '0 23px 80px 0' }}>
                <Card key={business.id} onClick={(e) => handleCardClicked(e, business.name, business.business_type)} fluid={true} style={{ color: 'black', boxShadow: 'none' }} >
                  {/* { business.photo == null ? <Image src={card2} wrapped ui={false} /> : <Image src={business.photo} wrapped ui={false} /> } */}
                  <Image src={store} wrapped ui={false} style={{ bordeRadius: '8px' }} />
                  <Card.Content>
                    <Card.Header style={{ paddingTop: 20, fontSize: 22 }}>
                      {business.name}
                      <Icon name='check circle' color='yellow' />
                    </Card.Header>
                    <Card.Header style={{ padding: '10px 0', fontSize: 20 }}>
                      {business.bio}
                    </Card.Header>
                    <List bulleted horizontal >
                      <List.Item ></List.Item>
                      <List.Item style={{ fontSize: 20 }}>{business.business_type}</List.Item>
                    </List>
                  </Card.Content>

                </Card>
              </CardColumn>
            )
          })}
        </Grid.Row>



      </Grid>
    </div>
  )
}

export default withCookies(Shopping)