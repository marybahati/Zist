import React, { useState } from 'react';
import axios from 'axios';
import { Grid,Image, Icon, Input,  List, Header, Card, Dropdown, Button  } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import { RatedStars } from './Ratings';
import styled from 'styled-components';
import cart from "./../../Assets/searchCart.png";
import { withCookies } from 'react-cookie';

const CardColumn = styled(Grid.Column)`
    margin-bottom: 100px;
    padding: 0 0 0 80px !important;
`;
const SearchBar = styled(Dropdown)`
    margin: 0 0 40px 0 !important;
    padding: 20px 20px !important;
`;

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: [],
      products: [],
      search: ''
    }
  }

  async componentDidMount() {
    const { cookies } = this.props
    const token = cookies.get('access-token')
    console.log(token)

    try {
      const businesses_res = await axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/business/`)
      if (businesses_res.status == 200) {
        this.setState({ businesses: businesses_res.data })
      }
    } catch (error) {
      console.log(error)
    }

    try {
      const products_res = await axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/products/`,
      { 
        headers: {"Authorization" : `Bearer ${token}`} 
      }
      )
      if ( products_res.status == 200) {
        this.setState({ products: products_res.data })
      }
      console.log(products_res)
    } catch (error) {
      console.log(error)
    }

  }
renderCards = business => {
  if ( this.state.search !== '' && business.name.toLowerCase().indexOf( this.state.search) === -1 && business.business_type.toLowerCase().indexOf(this.state.search) === -1  ) {
    return null 
  }
  return (
      <CardColumn width={7} style={{ margin: '0 30px 80px 0'}}>
        <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070',minHeight:'570px ' }}>
          <Image src={card2} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{business.name} <Icon name='check circle' color='yellow' /></Card.Header>
            <Grid>
              <Grid.Row width={16} style={{ marginTop: '15px', marginBottom: '5px' }}>
                <Grid.Column width={10} >
                  <h4>
                    {business.bio}
                  </h4>
                </Grid.Column>

                <Grid.Column width={6} style={{ textAlign: 'center' }}>
                  <RatedStars rating={5} />
                </Grid.Column>

              </Grid.Row>
            </Grid>

            <List bulleted horizontal >
              <List.Item ></List.Item>
              <List.Item >{business.business_type}</List.Item>
            </List>
          </Card.Content>

        </Card>
      </CardColumn>
  )
}  
onSearch = (e) => {
    this.setState({search: e.target.value})
}
  render() {
    console.log(this.state.businesses);
    console.log(this.state.products);
    console.log(this.state.search)
    return (
      <div>
        <Grid>
          <Grid.Row width={16} style={{background:'pink'}}>
          <Input placeholder='Search...'
           search 
           onChange={this.onSearch} 
           options={this.state.businesses.map( business => business.name )}
           />
          </Grid.Row>
          <Grid.Row width={16} style={{ background: '', margin: '0 auto 0 auto' }} >
            { this.state.businesses.map( business => {
              return this.renderCards(business)
            })
            }
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default withCookies(Cards)