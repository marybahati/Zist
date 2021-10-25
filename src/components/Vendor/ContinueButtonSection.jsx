import React from 'react'
import { SuccessModal } from './SuccessModal';
import { ContinueButton } from './ContinueButton';
import history from '../../History';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { withCookies } from 'react-cookie';
import {HOST_API} from '../../endpoints';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

const ContinueButtonSection = (props) => {
  const { modalOpen } = props
  const [openModal,setOpenModal] = useState(modalOpen)

  console.log(modalOpen, 'pg2')
  const handleRedirect = () => {
    setOpenModal(false)
    history.push('/vendor-dashboard')
  }
    console.log(modalOpen, '===6y')
    return ([
      <ContinueButton // Button to click to activate the Modal
        key='button'
      />,
      <SuccessModal // The invisible modal itself
        key='modal1'
        modalOpen={modalOpen}
        handleClose={handleRedirect}
      />
    ])
}

export default withCookies(ContinueButtonSection)