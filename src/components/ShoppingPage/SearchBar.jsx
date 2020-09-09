import React, { useState, useEffect } from 'react';
import { Grid,Dropdown } from "semantic-ui-react";
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import axios from 'axios';

const SearchInput = styled(Dropdown)`
    border: none !important;
    padding: 10px 0 !important;
    font-size:20px !important;
    @media only screen and (max-width: 1200px) {
        font-size: 16px !important;
    }
`;
const SearchInputColumn = styled(Grid.Column)`
    margin: 0  !important;
    padding: 30px 20px !important;
`;
const SearchColumn = styled(Grid.Column)`
  width: 50% !important;
  margin: 0 auto !important;
`;
const SearchBar = (props) => {
    const options = [
        {
            key: 'Jenny Hess',
            text: 'Jenny Hess',
            value: 'Jenny Hess',
            image: { avatar: false, src: strawberries },
        },
        {
            key: 'Elliot Fu',
            text: 'Elliot Fu',
            value: 'Elliot Fu',
            image: { avatar: false, src: bananas },
        },
        {
            key: 'Stevie Feliciano',
            text: 'Stevie Feliciano',
            value: 'Stevie Feliciano',
            image: { avatar: false, src: blueberries },
        },
    ]

    const { cookies } = props
    const token = cookies.get('access-token')

    const [selectedOption, setSelectedOption] = useState('')
    const [businesses, setBusinesses] = useState()
    const [products, setProducts] = useState()

    const handleFetch = async () => {
        try {
            const businesses_res = await axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/business/`)
            if (businesses_res.status == 200) {
                setBusinesses({ businesses: businesses_res.data })
            }
        } catch (error) {
            console.log(error)
        }

        try {
            const products_res = await axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/products/`,
                {
                    headers: { "Authorization": `Bearer ${token}` }
                }
            )
            if (products_res.status == 200) {
                setProducts({ products: products_res.data })
            }
            console.log(products_res)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <Grid>
            <Grid.Row>
                <SearchColumn >
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}></Grid.Column>
                            <Grid.Column width={3}></Grid.Column>
                            <SearchInputColumn width={10}>
                                <SearchInput
                                    placeholder='SEARCH FOR A PLACE OR AN ITEM'
                                    fluid
                                    // selection
                                    scrolling
                                    options={options}
                                    // clearable
                                    search
                                    onChange={(e, { value }) => setSelectedOption({ selectedOption: value })}
                                    noResultsMessage='Oops ! Looks like our search came back empty… We suggest checking the spelling or searching for something else'
                                >
                                </SearchInput>
                            </SearchInputColumn>
                        </Grid.Row>
                    </Grid>
                </SearchColumn>
            </Grid.Row>
        </Grid >
    )
}

export default withCookies(SearchBar)