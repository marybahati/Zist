import React, { useState, useEffect } from 'react'
import { Grid, Typography, IconButton, TextField, Button } from "@material-ui/core";
import styled from 'styled-components';
import shelving from './../../Assets/shelving.png';
import history from '../../History';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from '../../endpoints';
import { useDropzone } from "react-dropzone";
import { useSnackbar } from 'notistack';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import ImageIcon from '@material-ui/icons/Image';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles({
    autocomplete: {
        minWidth: '10rem',
        background: 'white !important',
        border: '1px #DEDEDF solid',
        borderRadius: '3px'
    },
    mainDiv: {
        background: '#F9F7F1 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 !important',
    },
    mainGrid: {
        width: '80%',
        margin: '0 auto 100px auto !important',
    },
    headers: {
        textAlign: 'center',
        color: '#FFBD59',
    },
    boldFont: {
        fontWeight: 'bold !important',
        paddintBottom: 20,
    },
    dropzoneDiv: {
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#bdbdbd',
        height: '230px',
        margin: 'auto 0 !important',
        width: '100%',
    },
    textfields: {
        background: 'white',
        padding: '5px 0 0 0',
        margin: '0  0 10px 0',
        ' & .MuiOutlinedInput-input': {
            padding: '10px 14px'
        },
    },
    centeredButtonColumns: {
        width: '180px',
        margin: '0 auto'
    },
    createItemButton: {
        background: '#FFBD59 0% 0% no-repeat padding-box !important',
        border: '2px solid #FEE2D4 !important',
        borderRadius: '24px !important',
        opacity: 1,
        height: '50px !important',
        width: '100%',
        fontSize: '18px !important',
        color: '#050504 !important',
        margin: '40px 0 0 0 !important',
    },
    viewItemsButton: {
        background: 'background: #FEE2D4 0% 0% no-repeat padding-box !important',
        border: '2px solid #FEE2D4 !important',
        borderRadius: '24px !important',
        opacity: 1,
        height: '50px !important',
        width: '100%',
        fontSize: '18px !important',
        color: '#050504 !important',
        margin: '40px 0 0 0 !important',
    },
});
const AutoComplete = withStyles({
    input: {
        fontSize: '18px',
        minWidth: '7rem',
        padding: '11px 22px !important',
        border: 'none !important',
        '&::placeholder': {
            opacity: 1
        }
    },
})(Autocomplete)
const filter = createFilterOptions();

const CreateProduct = (props) => {
    const { cookies } = props
    const d = props.location && props.location.state || ''
    const id = d.id
    console.log(((props.location && props.location.state) || ''))
    const data = cookies.get('login-res')
    const token = data?.access
    const businessId = cookies.get('business-id')
    const [fetchedProduct, setFetchedProduct] = useState()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [stock, setStock] = useState()
    const [fetchedCategories, setFetchedCategories] = useState([])
    const [value, setValue] = React.useState(d.category)
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
    const classes = useStyles();

    useEffect(() => {
        setName(d.name)
        setStock(d.stock)
        setPrice(d.price)
        setDescription(d.description)
        setValue(d.category)
    }, []);
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
        try {
            const product_res = await axios.put(HOST_API + `zist/vendor/products/${id}/`,
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
            if (product_res.status == 200) {
                console.log(product_res)
                enqueueSnackbar('You have successfully updated the product', { variant: 'success' })
                history.goBack()
            }
        } catch (error) {
            console.log(error)
            enqueueSnackbar(`${error}`, { variant: 'error' })
        }
    }
    const handleGoingBack = () => {
        history.goBack()
    }

    console.log(value, 'autocomplete=val ')
    return (
        <div className={classes.mainDiv} >
            <div className={classes.mainGrid} >
                <Grid container >
                    <Grid item xs={1} >
                        <IconButton onClick={handleGoingBack} >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item style={{ width: '455px', margin: '20px auto' }} >
                        <img src={shelving} />
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{ margin: '20px auto' }} >
                        <Typography variant='h5' className={classes.headers} > SHELVING </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{ margin: '20px auto' }} >
                        <Typography variant='h5' className={classes.boldFont} >  Welcome to Shelving where putting up your wares is all within a button???s reach.  </Typography>
                        <Typography variant='h5' className={classes.boldFont} > Edit product. </Typography>
                    </Grid>
                </Grid>
                <form autoComplete='off' onSubmit={handleSubmit} encType='multipart/form-data' >
                    <Grid container item xs={12} spacing={3} >
                        <Grid item xs={3} >
                            <div  {...getRootProps({ className: classes.dropzoneDiv })}>
                                <input {...getInputProps()} />
                                {files.length === 0 ? (
                                    <div style={{ paddingTop: 50 }} >
                                        <ImageIcon fontSize='large' />
                                        <p> Upload image </p>
                                    </div>
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
                            </div>
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container spacing={3} >
                                <Grid item xs={6} >
                                    <TextField
                                        fullWidth
                                        required
                                        placeholder="Item name"
                                        variant="outlined"
                                        name='name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className={classes.textfields}
                                    />
                                    <TextField
                                        fullWidth
                                        required
                                        variant="outlined"
                                        value={stock}
                                        placeholder='Items in stock'
                                        name='stock'
                                        type='number'
                                        min="1"
                                        onChange={e => setStock(e.target.value)}
                                        className={classes.textfields}
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        fullWidth
                                        required
                                        variant="outlined"
                                        value={price}
                                        placeholder=' Item price '
                                        name='price'
                                        type='number'
                                        min="1"
                                        onChange={e => setPrice(e.target.value)}
                                        className={classes.textfields}
                                    />
                                    <AutoComplete
                                        className={classes.autocomplete}
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
                                        disableClearable
                                        defaultValue={value}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="Select Category"
                                                InputProps={{ ...params.InputProps, disableUnderline: true }}
                                                fullWidth
                                                required
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        required
                                        variant="outlined"
                                        value={description}
                                        placeholder='Add the item Ingredients '
                                        name='description'
                                        type='text'
                                        multiline
                                        rows={2}
                                        onChange={e => setDescription(e.target.value)}
                                        className={classes.textfields}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} >
                        <Grid item className={classes.centeredButtonColumns} >
                            <Button type='submit' className={classes.createItemButton} > Update </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>

    )
}
export default withCookies(CreateProduct)