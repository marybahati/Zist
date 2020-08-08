import React, { useState } from 'react';
import axios from 'axios';
import { Grid,Image, Icon, Input,  List, Header, Card, Dropdown } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import { RatedStars } from './Ratings';
import styled from 'styled-components';

const CardColumn = styled(Grid.Column)`
    margin-bottom: 100px;
    padding: 0 0 0 80px !important;
`;

export class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: [],
      search: ''
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/business/`)
      if (res.status == 200) {
        this.setState({ businesses: res.data })
      }
      console.log(res)
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
    console.log(this.state.search)
    return (
      <div>
        <Grid>
          <Grid.Row width={16} style={{background:'pink'}}>
          <Input placeholder='Search...'
          //  as='input'
           search 
           onChange={this.onSearch} 
          //  icon='search' 
          //  selection
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