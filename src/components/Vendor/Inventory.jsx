import React from 'react';
import { Tab, Header, Button, Icon, Grid, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import  Shelving  from './Shelving';
import shelving from './../../Assets/shelving.png';
import suppliers from './../../Assets/suppliers.png';
import requests from './../../Assets/requests.png';
import Suppliers from './Suppliers';
import Requests from './Requests';
import history from './../../History';
import StockManagement from './StockManagement';
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
const TabPanels = styled(Tab.Pane)`
   margin: 60px 0 30px 0 !important;
   background:inherit !important;
   border:none !important;
   box-shadow:none !important;
`;
const Columns = styled(Grid.Column)`
   padding:  0  !important;
`;
const ImageButtons = styled(Button)`
   background: inherit !important;
   font-size: 26px !important;
`;
const Images = styled(Image)`
   margin: 0 0 25px 0 !important;
`;
const Icons = styled(Grid.Column)`
  padding: 0 ;
  text-align: center;
`;

const panes = [
    {
        menuItem: <ImageButtons><Images src={shelving} /> SHELVING </ImageButtons>,
    render: () => <TabPanels attached={false} > <Shelving /> </TabPanels>,
    },
    {
        menuItem: <ImageButtons><Images src={suppliers} /> STOCK MANAGEMENT </ImageButtons>,
        render: () => <TabPanels attached={false} > <StockManagement/> </TabPanels>,
    }
    // ,
    // {
    //     menuItem: <ImageButtons><Images src={requests} /> REQUESTS </ImageButtons>,
    //     render: () => <TabPanels attached={false} > <Requests/> </TabPanels>,
    // }
]
export const Inventory = (props) => {
    const {id} = (props.location && props.location.state) || '';
    console.log(props.location && props.location.state)
    const handleGoingBack = () => {
        history.goBack()
    }

    return (
        <MainDiv>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={1} />
                    <Grid.Column>
                        <Icons width={1}>
                            <Button style={{ background: 'inherit' }} onClick={handleGoingBack}>  <Icon name='chevron left' size='large' link /> </Button>
                        </Icons>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <MainGrid>
                <Grid.Row>
                    <Columns >
                        <Tab menu={{ text: true}} panes={panes} />
                    </Columns>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}