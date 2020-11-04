import React, { useState } from 'react';
import { Grid, Image, Button, Dropdown, Input, Icon } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import Collapsible from 'react-collapsible';
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
const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;
const UserList = () => {
    const options = [
        {
            key: 'Strawberry',
            name: 'Strawberry',
            price: 'Kshs. 900/bunch',
            image: { src: strawberries },
        },
        {
            key: 'Banana',
            name: 'Banana',
            price: 'Kshs. 700/units',
            image: { src: bananas },
        },
        {
            key: 'Blueberry',
            name: 'Blueberry',
            price: 'Kshs. 300/pack',
            image: { src: blueberries },
        },
    ]

    const [selectedOption, setSelectedOption] = useState('')
    const [products, setProducts] = useState([options])
    const [hideAisles, setHideAisles] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [showFruits, setShowFruits] = useState(false)
    const [showGreens, setShowGreens] = useState(false)
    const [showSnacks, setShowSnacks] = useState(false)
    const [showCooking, setShowCooking] = useState(false)
    console.log(searchText)
    const handleHideAisles = () => {
        setHideAisles(true)
        setShowFruits(false)
        setShowGreens(false)
        setShowSnacks(false)
        setShowCooking(false)
    }
    const handleShowAisles = () => {
        setHideAisles(false)
        setShowFruits(false)
        setShowGreens(false)
        setShowSnacks(false)
        setShowCooking(false)
    }
    const handleShowFruits = () => {
        setShowFruits(true)
        setShowCooking(false)
        setShowGreens(false)
        setShowSnacks(false)
    }
    const handleShowGreens = () => {
        setShowGreens(true)
        setShowFruits(false)
        setShowCooking(false)
        setShowSnacks(false)
    }
    const handleShowSnacks = () => {
        setShowSnacks(true)
        setShowFruits(false)
        setShowCooking(false)
        setShowGreens(false)
    }
    const handleShowCooking = () => {
        setShowCooking(true)
        setShowFruits(false)
        setShowGreens(false)
        setShowSnacks(false)
    }
    const onSearch = (e) => {
        setSearchText({ searchText: e.target.value })
    }
    const renderProducts = (product) => {
        if (searchText !== '' && product.name.toLowerCase().indexOf(searchText) === -1) {
            return null
        }
        return (
            <ProductRows key={product.name}>
                <Grid.Column width={5}>
                    <ProductImages src={product.image.src} />
                </Grid.Column>
                <ProductName center width={5} >
                    <h3> {product.name} </h3>
                </ProductName>
                <ItemsColumn width={4}>
                    <h3> {product.price} </h3>
                </ItemsColumn>
            </ProductRows>

        )
    }
    const filteredProducts = options.filter( product => {
        return product.name.toLowerCase().includes(searchText)
        console.log(product.name)
    })
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
                            <AisleColumn width={3} >
                                <AisleButton onClick={handleShowFruits} > Fruits </AisleButton>
                            </AisleColumn>
                            <AisleColumn width={3}> <AisleButton onClick={handleShowGreens} > Greens </AisleButton> </AisleColumn>
                            <AisleColumn width={3}> <AisleButton onClick={handleShowSnacks} > Snacks </AisleButton> </AisleColumn>
                            <AisleColumn width={3}> <AisleButton onClick={handleShowCooking} > Cooking </AisleButton> </AisleColumn>
                            <Grid.Column width={3}> <HideAisleButton onClick={handleHideAisles}> Hide Aisles </HideAisleButton> </Grid.Column>
                        </Grid.Row>
                    )}
                {showFruits ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16}  >
                                    {options.map(product => {
                                        return renderProducts(product)
                                    })}
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showGreens ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16}  >
                                    {options.map(product => {
                                        return renderProducts(product)
                                    })}
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showSnacks ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16}  >
                                    {options.map(product => {
                                        return renderProducts(product)
                                    })}
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showCooking ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16}  >
                                    {options.map(product => {
                                        return renderProducts(product)
                                    })}
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
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
                            onChange={onSearch}
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