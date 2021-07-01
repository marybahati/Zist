import React,{useState} from 'react';
import  Button  from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    background: '#FFBD59 0% 0% no-repeat padding-box !important',
    border: '2px solid #FEE2D4 !important',
    borderRadius: '24px !important',
    opacity: 1,
    height: '66px !important',
    width: '180px',
    fontSize: '20px !important',
    color: '#050504 !important',
    margin: '50px 0 !important',
  }
}))

const Buttonx = styled(Button)`
    // background: #FFBD59 0% 0% no-repeat padding-box !important;
    // border: 2px solid #FEE2D4 !important;
    // border-radius: 24px !important;
    // opacity: 1;
    // height: 66px !important;
    // width: 100%;
    // font-size: 26px !important;
    // color: #050504 !important;
    // margin: 50px 0 !important;
`;

export const ContinueButton = (props) => {
    const classes = useStyles()
    return  <Button type='submit' className={classes.root} onClick={props.handleClick} > CONTINUE </Button>
}


