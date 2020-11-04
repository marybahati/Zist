import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Form, Dropdown } from "semantic-ui-react";
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


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

const AddProduct = (props) => {
    const { cookies } = props
    const token = cookies.get('access-token')
    const [name, setName] = useState()
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [stock, setStock] = useState()
    const [cancel, setCancel] = useState()
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    
    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData((prevState) => ({ ...prevState, [name]: value }))
    // }
    useEffect(async () => {
        try {
            const result = await axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/categories/`,
                {
                    headers: { "Authorization": `Bearer ${token}` }
                }
            )
            if (result.status == 200) {
                setCategory(result.data)
            }
        } catch (error) {
            console.log(error)
        }

    }, []);

    const categories = category.map(x => ({ text: x.category, value: x.id }))
    console.log(selectedCategory)
    const handleSubmit = async () => {
        const categorySelected = Object.values(selectedCategory)
        console.log(categorySelected)
        try {
            const product_res = await axios.post(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/vendor/products/`,
                {
                    name: name,
                    price: price,
                    category: 2,
                    description: description,
                    // image: image,
                    metadata: stock
                },
                { headers: { "Authorization": `Bearer ${token}` } }
            )
            if (product_res.status == 201) {
                console.log(product_res)
                setSnackbarOpen(true)
                toast.success("You have successfully added a new product",{
                    className:'toast',
                    draggable: true,
                    position: toast.POSITION.TOP_CENTER,
                    type: toast.TYPE.SUCCESS,
                    hideProgressBar: true
                  }) 
            }
        } catch (error) {
            console.log(error)
            toast.error(`${error}`,{
                className:'toast',
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
        <Form >
            <Form.Group>
                <Grid>
                    <Grid.Row>
                    <ToastContainer autoClose={4000} onOpen={snackbarOpen} />
                        <Grid.Column width={5}>
                            <Form.Input
                                placeholder='Add an image'
                                name='image'
                                type='file'
                                accept="image/PNG, image/JPEG, image/JPG"
                                onChange={e => setImage(e.target.value)}
                            />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Form.Input
                                required
                                placeholder='Add Product Name'
                                name='name'
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid.Column>
                        <Grid.Column width={5} >
                            <Form.Input
                                required
                                placeholder='Add price I.e 0/kg'
                                name='price'
                                type='number'
                                min="1"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={5}>
                            {/* <Form.Input
                                required
                                placeholder='Add the category of the item'
                                name='category'
                                type='text'
                                onChange={e => setCategory(e.target.value)}
                            /> */}
                            < Dropdown
                                placeholder='Add the category of the item'
                                openOnFocus={false}
                                fluid
                                selection
                                options={categories}
                                onChange={(e, { value }) => setSelectedCategory({ SelectedCategory: value })}
                                clearable
                                search
                                style={{ padding: '2rem !important' }}
                            />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Form.Input
                                required
                                placeholder='Add how many Items are in stock'
                                name='stock'
                                type='number'
                                min="1"
                                onChange={e => setStock(e.target.value)}
                            />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Form.Input
                                required
                                placeholder='Add the item description'
                                name='description'
                                type='text'
                                onChange={e => setDescription(e.target.value)}
                            />
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