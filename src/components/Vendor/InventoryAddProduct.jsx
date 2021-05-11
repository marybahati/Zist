import React, { useState, useEffect } from 'react'
import { Grid, Image, Button, Icon, Form, Dropdown } from "semantic-ui-react";
import styled from 'styled-components';
import shelving from './../../Assets/shelving.png';
import history from '../../History';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from '../../endpoints';
import { useDropzone } from "react-dropzone";
import { useSnackbar } from 'notistack';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles'

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
    font-size: 18px !important;
    color: #050504 !important;
    margin:  20px 0 !important;
`;
const DropzoneDiv = styled.div`
text-align: center;
  /* border: 3px dashed #eeeeee; */
  background-color: #fff;
  color: #bdbdbd;
  height:230px;
  margin: auto 0 !important;

`;
const CenteredColumn = styled(Grid.Column)`
    margin: 0 auto !important;
`;
const Buttonx = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 18px !important;
    color: #050504 !important;
    margin: 40px 0 0 0 !important;
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

const useStyles = makeStyles({
    autocomplete: {
        minWidth: '10rem',
        background:'white !important',
        border: '1px #DEDEDF solid',
        borderRadius: '3px'
      },
  });
  const AutoComplete = withStyles({
    input:{
      fontSize: '18px',
      minWidth: '7rem',
      padding:'11px 22px !important',
      border:'none !important',
      '&::placeholder': {
        opacity: 1
      }
    },
  })(Autocomplete)  
const filter = createFilterOptions();

const CreateProduct = (props) => {
    const { cookies } = props
    const data = cookies.get('login-res')
    const businessId = cookies.get('business-id')
    const token = data?.access
    // const businessId = data.business[0].id
    console.log(data, token, businessId)
    const [name, setName] = useState()
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(['fruits', 'cakes', 'Oils', 'furniture'])
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState()
    const [value, setValue] = React.useState(null);
    const [fetchedCategories, setFetchedCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(value)
    const { enqueueSnackbar } = useSnackbar();
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: '.jpg, .png, .jpeg',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    console.log(selectedCategory)
    const classes = useStyles();
   
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

    useEffect(() => {
        axios.get(HOST_API + `zist/business/${businessId}/get_categories/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                if (res.status === 200) {
                    setFetchedCategories(res.data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const categorySelected = Object.values(selectedCategory)
        console.log(categorySelected)
        try {
            const product_res = await axios.post(HOST_API + `zist/vendor/products/`,
                {
                    name: name,
                    price: price,
                    category: selectedCategory?.id,
                    description: description,
                    // image: image,
                    metadata: stock,
                    business: businessId
                },
                { headers: { "Authorization": `Bearer ${token}` } }
            )
            if (product_res.status == 201) {
                console.log(product_res)
                enqueueSnackbar('You have successfully added a new product', { variant: 'success' })
                setName('')
                setPrice('')
                setSelectedCategory('')
                setDescription('')
                setStock('')
                setValue('')
            }
        } catch (error) {
            console.log(error)
            enqueueSnackbar(`${error}`, { variant: 'error' })
        }
    }
    const handleGoingBack = () => {
        history.goBack()
    }
    const handleViewProducts = () => {
        history.push('/vendor-products')
    }
    console.log(value, 'autocomplete=val ')
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
                    <NoSpaceColumn>
                        <h2> Add your products. </h2>
                    </NoSpaceColumn>
                </Grid.Row>
                <Grid.Row>
                    <Columns width={16}>
                        <Form size='large' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                            <DropzoneDiv {...getRootProps({ className: "dropzone" })}>
                                                <input {...getInputProps()} />
                                                {files.length === 0 ? (
                                                    <p style={{ padding: '120px 0 !important',margin:'0',fontSize:20 }}> Add the business profile picture by clicking here </p>
                                                ) : (
                                                        files.map(file => {
                                                            return (
                                                                <img
                                                                    src={file.preview}
                                                                    style={{ width: '100%', height: '100%' }}
                                                                />
                                                            )
                                                        })
                                                    )
                                                }
                                            </DropzoneDiv>
                                        </Grid.Column>
                                        <Grid.Column width={11}>
                                            <Grid>
                                                <Grid.Row>

                                                    <Grid.Column width={8}>
                                                        <Form.Input
                                                            value={name}
                                                            required
                                                            placeholder='Item name'
                                                            name='name'
                                                            onChange={e => setName(e.target.value)}
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column width={8} >
                                                        <Form.Input
                                                            value={price}
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
                                                            value={stock}
                                                            required
                                                            placeholder='Add how many Items are in stock'
                                                            name='stock'
                                                            type='number'
                                                            min="1"
                                                            onChange={e => setStock(e.target.value)}
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column width={8} >
                                                        <div>
                                                            <AutoComplete
                                                                className={classes.autocomplete}
                                                                style={{background:'red'}}
                                                                value={value}
                                                                onChange={(event, newValue) => {
                                                                    console.log(newValue, '==================')
                                                                    if (typeof newValue === 'string') {
                                                                        console.log(newValue, '=1')
                                                                        setValue(newValue);
                                                                        setSelectedCategory(newValue)
                                                                    } else {
                                                                        // Create a new value from the user input
                                                                        console.log(newValue)
                                                                        if (newValue.category === "Create new category") {
                                                                            history.push('/inventory-add-category')
                                                                        } else {
                                                                            if (newValue && newValue.inputValue) {
                                                                                setValue(newValue);
                                                                                setSelectedCategory(newValue)
                                                                            } else {
                                                                                console.log(newValue, '=2')
                                                                                setValue(newValue);
                                                                                setSelectedCategory(newValue)
                                                                            }

                                                                        }
                                                                    }
                                                                }}

                                                                filterOptions={(options, params) => {
                                                                    const filtered = filter(options, params);

                                                                    // Suggest the creation of a new value
                                                                    // if (params.inputValue !== '') {
                                                                    filtered.push({
                                                                        inputValue: params.inputValue,
                                                                        category: 'Create new category',
                                                                        // title: `Create category ${params.inputValue}`,
                                                                    });
                                                                    // }

                                                                    return filtered;
                                                                }}

                                                                // autoComplete
                                                                // clearOnBlur
                                                                // handleHomeEndKeys
                                                                selectOnFocus
                                                                id="category"
                                                                options={fetchedCategories}
                                                                getOptionLabel={(option) => {
                                                                    // Value selected with enter, right from the input
                                                                    if (typeof option === 'string') {
                                                                        return option;
                                                                    }
                                                                    // Add "xxx" option created dynamically
                                                                    if (option.inputValue) {
                                                                        return option.inputValue;
                                                                    }

                                                                    // Regular option
                                                                    return option.category;
                                                                }}
                                                                renderOption={(option) => option.category}
                                                                freeSolo
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        placeholder="Select Category"
                                                                        InputProps={{ ...params.InputProps, disableUnderline: true }}
                                                                        fullWidth
                                                                    />
                                                                )}
                                                            />
                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={16}>
                                                        <Form.TextArea
                                                            value={description}
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
                                        <CenteredColumn width={4}>
                                            <Buttonx type='submit' > Add new item </Buttonx>
                                        </CenteredColumn>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <CenteredColumn width={4}>
                                            <ActionButton onClick={handleViewProducts}  > View Products </ActionButton>
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
export default withCookies(CreateProduct)