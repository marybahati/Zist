import React, { useState } from 'react'
import { Grid, Image, Button, Icon, Form } from "semantic-ui-react";
import styled from 'styled-components';
import shelving from './../../Assets/shelving.png';
import history from '../../History';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from '../../endpoints';
import { useSnackbar } from 'notistack';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const ActionButton = styled(Button)`
    background: #FEE2D4 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 50px 0 !important;
`;
const DropzoneDiv = styled.div`
text-align: center;
  padding: 20px;
  /* border: 3px dashed #eeeeee; */
  background-color: #fff;
  color: #bdbdbd;
  height:230px;
  margin: auto 0 !important;

`;
const IntroColumn = styled(Grid.Column)`
    width: 60% !important;
    margin: 0 auto !important;
    text-align: center  !important;
`;
const CenteredColumn = styled(Grid.Column)`
    margin: 0 auto !important;
`;
const Buttonx = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 90px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 50px 0 !important;
`;
const Icons = styled(Grid.Column)`
  padding: 0 0 0 30px ;
  text-align: center;
`;
const Columns = styled(Grid.Column)`
   margin: 0 auto !important;
`;
const NoSpaceColumn = styled(Grid.Column)`
   padding: 0 !important;
`;
const DoneButton = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 20px 0 !important;
`;

const AddCategory = (props) => {
    const { cookies } = props
    const data = cookies.get('login-res')
    const businessId = cookies.get('business-id')
    const token = data?.access
    console.log(data, token, businessId)
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
 
    const { enqueueSnackbar } = useSnackbar();
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const product_res = await axios.post(HOST_API + `zist/categories/`,
                {
                    category: category,
                    description: description,
                    business: businessId
                },
                { headers: { "Authorization": `Bearer ${token}` } }
            )
            if (product_res.status == 201) {
                console.log(product_res)
                enqueueSnackbar(`You have successfully created category ${category}`, { variant: 'success' }) 
                setCategory('')
                setDescription('')
                // history.push('/inventory-create-product')
            }
        } catch (error) {
            console.log(error)
            enqueueSnackbar(`${error}`, { variant: 'error' }) 
        }
    }
    const handleGoingBack = () => {
        history.goBack()
    }

    return (
        <MainDiv>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={2}>
                        <Icons width={1}>
                            <Button style={{ background: 'inherit' }} onClick={handleGoingBack}>  <Icon name='chevron left' size='large' link color='black' /> </Button>
                        </Icons>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <MainGrid>
                <Grid.Row>
                    <CenteredColumn width={6}>
                        <Image src={shelving} />
                        <h2 style={{ color: 'orange', textAlign: 'center' }}> SHELVING </h2>
                    </CenteredColumn>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{ paddingBottom: 50 }}>
                        <h1> Welcome to Shelving where putting up your wares is all within a button’s reach. </h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Columns width={9}>
                    <h2 style={{paddingRight:'0px'}}> Add Category </h2>
                        <Form size='large' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <Form.Input
                                                value={category}
                                                required
                                                placeholder='Category'
                                                name='name'
                                                onChange={e => setCategory(e.target.value)}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <Form.Input
                                                value={description}
                                                required
                                                placeholder='Description'
                                                name='name'
                                                onChange={e => setDescription(e.target.value)}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <CenteredColumn width={9}>
                                            <ActionButton type='submit' > SAVE </ActionButton>
                                        </CenteredColumn>
                                    </Grid.Row>
                                </Grid>
                            </Form.Group>
                        </Form>
                    </Columns>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default withCookies(AddCategory)