import React,{ useState } from 'react';
import axios from 'axios';
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";


export  class Cards extends React.Component {
    state = {
      businesses: []
    }
  
    componentDidMount() {
      axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/businesseyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0NDY2NjE2LCJqdGkiOiI0NmRmZDZkYjY1NWY0YWYwOGQ3ZDYxMWY3NGNlMjliYSIsInVzZXJfaWQiOjU1fQ.foqW3xDCBMMEbrLUEP4lAyaaVnqoNZQx_pesdZv3-7U`,{
      // headers: {
      //   'Authorization': 'Basic {access_token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0NDY2NjE2LCJqdGkiOiI0NmRmZDZkYjY1NWY0YWYwOGQ3ZDYxMWY3NGNlMjliYSIsInVzZXJfaWQiOjU1fQ.foqW3xDCBMMEbrLUEP4lAyaaVnqoNZQx_pesdZv3-7U } '
      // }
      })
        .then(res => {
          const business = res.data;
          this.setState({ business });
          console.log(business)
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