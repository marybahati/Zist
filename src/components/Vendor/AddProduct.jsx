import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Form, Dropdown } from "semantic-ui-react";
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { HOST_API } from './../../endpoints';
import Dropzone from "react-dropzone";

const CenteredColumn = styled(Grid.Column)`
   margin: 0 auto !important;
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
const InputFields = styled(Form.Input)`
    padding: 20px 5px !important;
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
const AddProduct = (props) => {
    const { cookies } = props
    const data = cookies.get('login-res')
    const businessId = cookies.get('business-id')
    const token = data.access
    // const businessId = data.business[0].id
    console.log(data, token,businessId)
    const [name, setName] = useState()
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(['fruits', 'cakes', 'Oils','furniture'])
    const [selectedCategory, setSelectedCategory] = useState()
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [stock, setStock] = useState()
    const [cancel, setCancel] = useState()
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [fileNames, setFileNames] = useState([]);

    
    const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file.name));

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData((prevState) => ({ ...prevState, [name]: value }))
    // }
    const options = [
        {
          key: 'Cakes',
          text: 'Cakes',
          value: 'Cakes',
        },
        {
          key: 'Cosmetics',
          text: 'Cosmetics',
          value: 'Cosmetics',
        },
        {
          key: 'Vegetables',
          text: 'Vegetables',
          value: 'Vegetables',
        },
        {
          key: 'Fruits',
          text: 'Fruits',
          value: 'Fruits',
        }
        ]

    const categories = category.map(x => ({ text: x.category, value: x.id }))
    console.log(selectedCategory)
    const handleSubmit = async () => {
        const categorySelected = Object.values(selectedCategory)
        console.log(categorySelected)
        try {
            const product_res = await axios.post(HOST_API + `zist/vendor/products/`,
                {
                    name: name,
                    price: price,
                    category: 2,
                    description: description,
                    // image: image,
                    metadata: stock,
                    business: businessId
                },
                { headers: { "Authorization": `Bearer ${token}` } }
            )
            if (product_res.status == 201) {
                console.log(product_res)
                // setSnackbarOpen(true)
                toast.success("You have successfully added a new product", {
                    className: 'toast',
                    draggable: true,
                    position: toast.POSITION.TOP_CENTER,
                    type: toast.TYPE.SUCCESS,
                    hideProgressBar: true
                })
            }
        } catch (error) {
            console.log(error)
            toast.error(`${error}`, {
                className: 'toast',
                draggable: true,
                position: toast.POSITION.TOP_CENTER,
                type: toast.TYPE.ERROR,
                hideProgressBar: true
            })
        }
    }
    // const handleCancel = (props) => {
    //     setCancel(props.addProduct)
    // }

    return (
        <Form size='large'>
            <Form.Group>
                <Grid>
                    <Grid.Row>
                        <ToastContainer autoClose={4000} onOpen={snackbarOpen} />
                        <Grid.Column width={5}>
                            <Dropzone
                                onDrop={handleDrop}
                                accept="image/*"
                                minSize={1024}
                                maxSize={3072000}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <DropzoneDiv {...getRootProps({ className: "dropzone" })}>
                                        <input {...getInputProps()} />
                                        <p> Add product Images by clicking here </p>
                                    </DropzoneDiv>
                                )}
                            </Dropzone>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Grid>
                                <Grid.Row>
                                    {/* <Grid.Column width={5}>
                                        <Form.Input
                                            placeholder='Add product image'
                                            name='image'
                                            type='file'
                                            accept="image/PNG, image/JPEG, image/JPG"
                                            onChange={e => setImage(e.target.value)}
                                        />
                                    </Grid.Column> */}
                                    
                                    <Grid.Column width={8}>
                                        <Form.Input
                                            required
                                            placeholder='Item name'
                                            name='name'
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8} >
                                        <Form.Input
                                            required
                                            placeholder=' Item price '
                                            name='price'
                                            type='number'
                                            min="1"
                                            onChange={e => setPrice(e.target.value)}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>                                   
                                   <Grid.Column width={8}>
                                            <Form.Input
                                                required
                                                placeholder='Add how many Items are in stock'
                                                name='stock'
                                                type='number'
                                                min="1"
                                                onChange={e => setStock(e.target.value)}
                                            /> 
                                    </Grid.Column>
                                    <Grid.Column width={8} >
                                    < Dropdown
                                                placeholder='Aisle under'
                                                openOnFocus={false}
                                                fluid
                                                selection
                                                options={options}
                                                onChange={(e, { value }) => setSelectedCategory({ SelectedCategory: value })}
                                                clearable
                                                search
                                                style={{ padding: '2rem !important' }}
                                            />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                        <Grid.Column width={16}>
                                            <Form.TextArea
                                                required
                                                placeholder='Add the item Ingredients '
                                                name='description'
                                                type='text'
                                                onChange={e => setDescription(e.target.value)}
                                            />
                                        </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                        <CenteredColumn width={7}>
                            <ActionButton onClick={handleSubmit} type='submit' > ADD NEW ITEM </ActionButton>
                        </CenteredColumn>
                    </Grid.Row>
                    {/* <Grid.Row>
                        <CenteredColumn width={5}>
                            <ActionButton onClick={handleCancel} > CANCEL </ActionButton>
                        </CenteredColumn>
                    </Grid.Row> */}
                </Grid>


            </Form.Group>
            {/* <Form.Button content='Add Product'  /> */}
        </Form>
    )

}

export default withCookies(AddProduct)