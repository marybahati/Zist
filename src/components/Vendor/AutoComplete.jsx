/* eslint-disable no-use-before-define */
import React,{useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { withCookies } from 'react-cookie';
import { HOST_API } from '../../endpoints';
import axios from 'axios';
import History from '../../History';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 }
];
const filter = createFilterOptions();

const AutoComplete = (props) => {
    const [value, setValue] = React.useState(null);
    const [fetchedCategories, setFetchedCategories] = useState([])
    const { cookies } = props
    const data = cookies.get('login-res')
    const businessId = cookies.get('business-id')
    const token = data?.access
    console.log(fetchedCategories)

    useEffect(() => {
        axios.get(HOST_API + `zist/business/${businessId}/get_categories/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                if(res.status === 200){
                    setFetchedCategories(res.data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);
    console.log(value, 'val====== ')
    return (
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
                console.log(newValue,'=====================================')
                if (typeof newValue === 'string') {
                    console.log(newValue,'=1')
                    setValue(newValue);
                } else{
                    // Create a new value from the user input
                    if(newValue.category === "Create new category"){
                        History.push('vendor-dashboard')
                    }else{
                        if (newValue && newValue.inputValue){
                            setValue(newValue);
                        }else{
                            console.log(newValue,'=2')
                            setValue(newValue);
                        }                              
               
            }}}}

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

            autoComplete
            clearOnBlur
            handleHomeEndKeys
            id="category"
            options={fetchedCategories }
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
            style={{ width: '100%' }}
            renderInput={(params) => (
                <TextField {...params} label="Select Category" />
            )}
        />
    );
}
export default withCookies(AutoComplete)



