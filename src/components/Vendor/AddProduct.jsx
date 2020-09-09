import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Form } from "semantic-ui-react";
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import axios from 'axios';

const AddProduct = (props) => {
    const { cookies } = props
    const token = cookies.get('access-token')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState()
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [metadata, setMetadata] = useState('')

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData((prevState) => ({ ...prevState, [name]: value }))
    // }

    const handleSubmit = async () => {
        try {
            const product_res = await axios.post(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/vendor/products/`,
                { 
                    name : name,
                    price : price,
                    category : category,
                    description : description,
                    image : image,
                    metadata : metadata
                 },
                { headers: { "Authorization": `Bearer ${token}` } }
            )
            if (product_res.status == 201) {
                console.log(product_res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form >
            <Form.Group>
                <Form.Input
                    width={4}
                    required
                    placeholder='Add an image'
                    name='image'
                    type='file'
                    // accept="image/PNG, image/JPEG, image/JPG"
                    onChange={e => setImage(e.target.value)}
                />
                <Form.Input
                    width={4}
                    required
                    placeholder='Add Product Name'
                    name='name'
                    onChange={e => setName(e.target.value)}
                />
                <Form.Input
                    width={4}
                    required
                    placeholder='Add price I.e 0/kg'
                    name='price'
                    type='number'
                    min="1"
                    onChange={e => setPrice(e.target.value)}
                />
                <Form.Input
                    width={4}
                    required
                    placeholder='Add how many Items are in stock'
                    name='stock'
                    type='number'
                    min="1"
                    onChange={e => setMetadata(e.target.value)}
                />
                <Form.Input
                    width={4}
                    required
                    placeholder='Add the category of the item'
                    name='category'
                    type='text'
                    onChange={e => setCategory(e.target.value)}
                />

                <Form.Input
                    width={8}
                    required
                    placeholder='Add the item description'
                    name='description'
                    type='text'
                    onChange={e => setDescription(e.target.value)}
                />

            </Form.Group>
            <Form.Button content='Add Product' onClick={handleSubmit} />
        </Form>
    )

}

export default withCookies(AddProduct)