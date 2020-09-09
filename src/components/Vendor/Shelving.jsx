import React, { useState } from 'react';
import { Grid, Image,  Button,List } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import EditProducts from './EditProducts';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const ImageColumn = styled(Grid.Column)`
   padding : 0 40px 0 0 !important;
   text-align: center;
`;
const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 0 0 40px 0 !important "};
`;
const IntroColumn = styled(Grid.Column)`
   margin : 30px 0  !important;
   text-align: center;
`;
const IntroText = styled.h2`
   text-align: center !important;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const ProductNameColumn = styled(Grid.Column)`
   text-align: center !important;
   margin: ${props => props.center ? "auto 0 !important" : " 0 "};
`;
const ProductName = styled(Grid.Column)`
   margin: auto 0 auto 15px !important;
`;
const ProductImages = styled(Image)`
   width: 80% !important;
   margin: 0 auto 0 0 !important;
`;
const EditButton = styled(Button)`
   color: black !important;
   font-size: 22px !important;
   text-decoration: underline;
   background: inherit !important;

`;

const ProductsSection = (props) => {
    const [prodects,setProducts] = useState([])
    return (
        <Grid>
             <ProductRows>
                    <IntroColumn>
                        <List>
                            <EditButton onClick={props.handleEdit} > EDIT PRODUCTS </EditButton>
                        </List>
                    </IntroColumn>
                </ProductRows>
                <ProductRows spaced>
                   <Grid.Column width={4}>
                       <h3> PRODUCT IMAGES </h3>
                   </Grid.Column>
                   <ProductName width={4}>
                       <h3> PRODUCT NAME </h3>
                   </ProductName>
                   <Grid.Column width={4}>
                       <h3> PRICE/UNIT </h3>
                   </Grid.Column>
                   <Grid.Column width={3}>
                       <h3> IN STOCK </h3>
                   </Grid.Column>
                </ProductRows>

                <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={blueberries} />
                   </Grid.Column>
                   <ProductName center width={4} >
                       <h3> BLUEBERRIES </h3>
                   </ProductName>
                   <ItemsColumn width={4}>
                       <h3> Kshs. 300/pack </h3>
                   </ItemsColumn>
                   <ItemsColumn width={3}>
                       <h3> 12 </h3>
                   </ItemsColumn>
                </ProductRows>

                <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={bananas} />
                   </Grid.Column>
                   <ProductName width={4} >
                       <h3> BANANAS </h3>
                   </ProductName>
                   <ItemsColumn width={4}>
                       <h3> Kshs. 40/bunch </h3>
                   </ItemsColumn>
                   <ItemsColumn width={3}>
                       <h3> 24 </h3>
                   </ItemsColumn>
                </ProductRows>

                <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={strawberries} />
                   </Grid.Column>
                   <ProductName  width={4} >
                       <h3> STRAWBERRIES </h3>
                   </ProductName>
                   <ItemsColumn width={4}>
                       <h3>Kshs. 340/pack </h3>
                   </ItemsColumn>
                   <ItemsColumn width={3}>
                       <h3> 10 </h3>
                   </ItemsColumn>
                </ProductRows>
        </Grid>
    )
}
export const Shelving = (props) => {
    const [ edit, setEdit ] = useState(false)
    const handleEdit = () => {
        setEdit(true)
    }
    return (
            <Grid>
                <Grid.Row>
                    <IntroColumn>
                        <IntroText> Put items on your digital shelf for the new age digital customer. </IntroText>
                    </IntroColumn>
                </Grid.Row>
               <Grid.Row>
               { edit ? <EditProducts/> : <ProductsSection handleEdit={handleEdit} /> }
               </Grid.Row>
            </Grid>
    )
}