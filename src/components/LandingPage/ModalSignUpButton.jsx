import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '295px',
        height: '48px',
        background: '#FEE2D4 0% 0% no-repeat padding-box',
        opacity: 1,
        borderRadius: '30px',
        color: '#0A0806',
        marginTop: '29px',
        fontWeight: 'bold',
        [theme.breakpoints.between('xs','sm')]: {
            width: '100%',
          },
    },
}))

export const ModalSignUpButton = (props) => {
    const classes = useStyles()
    return (
        <Button type='submit' className={classes.root} >Sign up</Button>
    )
}

