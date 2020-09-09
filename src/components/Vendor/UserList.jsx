import React, { useState } from 'react';
import { Grid, Image, Button, Dropdown, Input } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const IntroColumn = styled(Grid.Column)`
    width: 60% !important;
    margin: 0 auto !important;
    text-align: center  !important;
`;
const UserName = styled.h2`
    text-decoration: underline !important;
    padding: 20px 0 !important;
`;
const BusinessImage = styled(Image)`
    margin: 0 auto !important;
`;
const AisleButton = styled(Button)`
    width: 180px !important;
    background: #0A0806 0% 0% no-repeat padding-box !important;
    border: 1px solid #C19A6B !important;
    border-radius: 5px !important;
    height: 70px !important;
    color: white !important;
    font-size: 20px !important;
    opacity: 1;
`;
const HideAisleButton = styled(Button)`
    width: 180px !important;
    background: inherit !important;
    height: 70px !important;
    color: #FFBD59 !important;
    font-size: 20px !important;
    opacity: 1;
`;
const AisleColumn = styled(Grid.Column)`
    margin: auto !important;
`;
const SearchInput = styled(Input)`
    border: none !important;
    padding: 10px 0 !important;
    font-size:24px !important;
    background: inherit !important;
    @media only screen and (max-width: 1200px) {
        font-size: 16px !important;
    }
`;
const SearchInputColumn = styled(Grid.Column)`
    margin: 0  !important;
    padding: 30px 25px !important;
`;
const SearchColumn = styled(Grid.Column)`
  margin: 0 auto !important;
  background:pink;
`;
const ProductName = styled(Grid.Column)`
   margin: auto 0 auto 15px !important;
`;
const ProductImages = styled(Image)`
   width: 80% !important;
   margin: 0 auto 0 0 !important;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 0 0 40px 0 !important "};
`;
const UserList = () => {
    const options = [
        {
            key: 'Strawberry',
            text: 'Strawberry',
            value: 'Strawberry',
            image: { avatar: false, src: strawberries },
        },
        {
            key: 'Banana',
            text: 'Banana',
            value: 'Banana',
            image: { avatar: false, src: bananas },
        },
        {
            key: 'Blueberry',
            text: 'Blueberry',
            value: 'Blueberry',
            image: { avatar: false, src: blueberries },
        },
    ]

    const [selectedOption, setSelectedOption] = useState('')
    const [hideAisles, setHideAisles] = useState(false)
    const [searchText, setSearchText] = useState('')

    const handleHideAisles = () => {
        setHideAisles(true)
    }
    const handleShowAisles = () => {
        setHideAisles(false)
    }
    const onSearch = (e) => {
        setSearchText({ searchText: e.target.value })
    }
    const renderProducts = (product) => {
        if (searchText !== '' && product.text.toLowerCase().indexOf(searchText) === -1) {
            return null
        }
        return (
            <ProductRows>
                <Grid.Column width={5}>
                    <ProductImages src={product.image.src} />
                </Grid.Column>
                <ProductName center width={5} >
                    <h3> {product.text} </h3>
                </ProductName>
                <ItemsColumn width={4}>
                    <h3> Kshs. 300/pack </h3>
                </ItemsColumn>
            </ProductRows>

        )
    }
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <IntroColumn>
                        <h2> Construct your shopping list and fill your trolley </h2>
                        <h2> From wherever you are. </h2>
                        <UserName> Bryan’s Shopping List </UserName>
                        <BusinessImage src={BusinessPic} />
                        <UserName> The Freshest Grocery Shop </UserName>
                    </IntroColumn>
                </Grid.Row>
                {hideAisles ? (
                    <Grid.Row>
                        <Grid.Column width={3}> <HideAisleButton onClick={handleShowAisles}> Show Aisles </HideAisleButton> </Grid.Column>
                    </Grid.Row>
                ) : (
                        <Grid.Row>
                            <AisleColumn width={3} > <AisleButton> Fruits </AisleButton> </AisleColumn>
                            <AisleColumn width={3}> <AisleButton> Greens </AisleButton> </AisleColumn>
                            <AisleColumn width={3}> <AisleButton> Snacks </AisleButton> </AisleColumn>
                            <AisleColumn width={3}> <AisleButton> Cooking </AisleButton> </AisleColumn>
                            <Grid.Column width={3}> <HideAisleButton onClick={handleHideAisles}> Hide Aisles </HideAisleButton> </Grid.Column>
                        </Grid.Row>
                    )}

                <Grid.Row >
                    {/* <SearchInputColumn width={14}>
                        <SearchInput
                        width={16}
                            placeholder='Search for what you want and add it just like you’d do with a regular list…'
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
                    </SearchInputColumn> */}
                    <SearchInputColumn width={14}> 
                    <SearchInput fluid placeholder='Search for what you want and add it just like you’d do with a regular list…'
                        search
                        onChange={onSearch}
                        options={options.map(product => product.text)}
                    />
                    </SearchInputColumn>
                </Grid.Row>
                {options.map(product => {
                    return renderProducts(product)
                })}
            </MainGrid>
        </MainDiv>
    )
}
export default UserList