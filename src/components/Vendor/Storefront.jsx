import React, { useState, useEffect } from 'react';
import { Grid, Popup, Icon, Form, List, Card } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import history from '../../History'
import { RatedStars } from '../ShoppingPage/Ratings';
import { ContinueButton } from './ContinueButton';
import { withCookies } from 'react-cookie';
import { HOST_API } from '../../endpoints';
import { useDropzone } from "react-dropzone";
import { useSnackbar } from 'notistack';

const MainDiv = styled.div`
   background: #F9F7F1;
`;
const MainGrid = styled(Grid)`
   width: 50%;
   margin : 0 auto !important;
   padding: 60px 0 !important;
   @media only screen and (max-width: 768px) {
    font-size: 20px !important;
    width: 80%;
}
`;
const FormLabels = styled.label`
    font-size: 25px !important;
`;
const ButtonGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto !important;
`;
const FormInput = styled.input`
    padding: 20px !important;
    font-size: 18px !important;
    margin: 20px 0 !important;
    width: 100% !important;
    @media only screen and (min-width: 1400px) {
        padding: 20px 20px !important;
        font-size: 20px !important;
    }
`;
const ColumnForm = styled(Grid.Column)`
    padding: 0 !important;
`
const DropzoneDiv = styled.div`
text-align: center;
//   padding: 120px 0 !important;
  /* border: 3px dashed #eeeeee; */
  background-color: #f6f6f6;
  color: #bdbdbd;
  height:300px;
//   margin: auto !important;

`;

const Storefront = (props) => {
    const { cookies } = props
    const userData = cookies.get('login-res')
    const id = cookies.get('business-id')
    const token = userData?.access
    console.log(userData, token, id)
    const businessData = userData?.business[0]
    const [fileNames, setFileNames] = useState([]);

    const { enqueueSnackbar } = useSnackbar();

    const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file.name));

    useEffect(() => {
        axios.get(HOST_API + `zist/vendor/business/${id}/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setbusinessInfo(res.data)
                setName(res.data.name)
                setNatureOfBusiness(res.data.business_type)
                setNiche(res.data.bio)
                setEmail(res.data.email)
                setTel(res.data.tel)
                setLocation(res.data.location)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    const [businessInfo, setbusinessInfo] = useState()
    const [name, setName] = useState()
    const [natureOfBusiness, setNatureOfBusiness] = useState()
    const [niche, setNiche] = useState()
    const [email, setEmail] = useState()
    const [tel, setTel] = useState()
    const [location, setLocation] = useState()
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: '.jpg, .png, .jpeg',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    console.log(businessInfo)

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(HOST_API + `zist/vendor/business/${id}/`, {
            name: name,
            business_type: natureOfBusiness,
            bio: niche,
            email: email,
            tel: tel,
            location: location
        },
            { headers: { "Authorization": `Bearer ${token}` } }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    enqueueSnackbar('You have successfully updated the business profile', { variant: 'success' })
                    history.push('/vendor-dashboard')
                }

            }).catch(error => {
                enqueueSnackbar(`${error}`, { variant: 'error' })
            });
    }

    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <h2> {name}??? Storefront. </h2>
                </Grid.Row>
                <Grid.Row>
                    <h2> OUTLOOK OF YOUR BUSINESS??? PROFILE </h2>
                </Grid.Row>
                <Grid.Row>
                    <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
                        {/* <Image src={card1} wrapped ui={false} /> */}
                        <DropzoneDiv {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {files.length === 0 ? (
                                <h3 style={{ margin: 'auto !important' }}> Add the business profile picture by clicking here </h3>
                            ) : (
                                    files.map(file => {
                                       return (
                                        <img
                                        src={file.preview}
                                        style={{width:'100%',height:'100%'}}
                                    />
                                       )
                                    })
                                )
                            }
                        </DropzoneDiv>
                        <Card.Content>
                            <Card.Header> {name} <Icon name='check circle' color='yellow' /></Card.Header>
                            <Grid>
                                <Grid.Row width={16} style={{ marginTop: '15px', marginBottom: '5px' }}>
                                    <Grid.Column width={10} >
                                        <Card.Header style={{ paddingLeft: '10px' }}>
                                            <h3> {niche} </h3>
                                        </Card.Header>
                                    </Grid.Column>

                                    <Grid.Column width={6} style={{ textAlign: 'center' }} >
                                        <RatedStars rating={3} />
                                    </Grid.Column>

                                </Grid.Row>
                            </Grid>

                            <List bulleted horizontal >
                                <List.Item ></List.Item>
                                <List.Item >{natureOfBusiness}</List.Item>
                            </List>
                        </Card.Content>

                    </Card>
                </Grid.Row>
                <Grid.Row>
                    <ColumnForm>
                        <Form >
                            <Form.Field>
                                <FormLabels>Name of business</FormLabels>
                                <Popup
                                    trigger={
                                        <FormInput placeholder='Enter the name your business is registered under???'
                                            type='text'
                                            required
                                            fluid
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    }
                                    content='* changing the business name would involve the verification process being done again for validity purposes.'
                                    position='bottom left'
                                />

                            </Form.Field>
                            <Form.Field>
                                <FormLabels>Nature of Store/Stall</FormLabels>
                                <FormInput
                                    fluid={true}
                                    placeholder='Nature of Store/Stall'
                                    search
                                    selection
                                    value={natureOfBusiness}
                                    onChange={e => setNatureOfBusiness(e.target.value)}
                                    style={{ padding: '50px 20px !important', position: 'inherit !important', boxShadow: 'none' }}
                                />
                            </Form.Field>


                            <Form.Field>
                                <FormLabels> Business Description </FormLabels>
                                <FormInput
                                    placeholder='Business niche '
                                    onChange={e => setNiche(e.target.value)}
                                    clearable
                                    search
                                    value={niche}
                                    style={{ padding: '2rem !important' }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <FormLabels> Business Location </FormLabels>
                                <FormInput
                                    placeholder='Business location '
                                    onChange={e => setLocation(e.target.value)}
                                    clearable
                                    search
                                    value={location}
                                    style={{ padding: '2rem !important' }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <FormLabels>Primary contact information</FormLabels>
                                <FormInput placeholder='Enter your primary contact (phone number)'
                                    required type="tel"
                                    onChange={e => setTel(e.target.value)}
                                    value={tel}
                                />
                            </Form.Field>

                            <Form.Field>
                                <FormLabels>Secondary contact information</FormLabels>
                                <FormInput placeholder='Enter your secondary contact (email)'
                                    required type='email'
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Form.Field>

                            <ButtonGrid width={16} >
                                <Grid.Row>
                                    <Grid.Column width={3}></Grid.Column>
                                    <Grid.Column width={10}>
                                        <ContinueButton type='submit' handleClick={handleUpdate} />
                                    </Grid.Column>
                                    <Grid.Column width={3}></Grid.Column>
                                </Grid.Row>
                            </ButtonGrid>

                        </Form>
                    </ColumnForm>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default withCookies(Storefront)