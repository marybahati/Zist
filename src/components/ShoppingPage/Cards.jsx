import React,{ useState } from 'react';
import axios from 'axios';
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";


export  class Cards extends React.Component {
    state = {
      businesses: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const business = res.data;
          this.setState({ business });
        })
    }
  
    render() {
      return (
        <ul>
          {/* { this.state.businesses.map(person => <li>{person.name}</li>)} */}
          <li>heeeeeeeeeeeeeeeeeeey</li>
        </ul>
      )
    }
  }