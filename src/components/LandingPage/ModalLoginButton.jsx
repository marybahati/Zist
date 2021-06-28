import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '295px',
        height: '48px',
        background: '#FFE5B4 0% 0% no-repeat padding-box',
        opacity: 1,
        borderRadius: '30px',
        color: '#0A0806',
        marginTop:'45px',
        marginBottom: '29px',
    },
}))

export const ModalLoginButton = (props) => {
    const classes = useStyles()
    return (
        <Button type='submit' className={classes.root} >Log in</Button>
    )
}
    
