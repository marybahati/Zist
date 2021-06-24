import React from 'react'
import { SuccessModal } from './SuccessModal';
import { ContinueButton } from './ContinueButton';
import history from '../../History';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withCookies } from 'react-cookie';
import {HOST_API} from '../../endpoints';


class ContinueButtonSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      errorSnackbar: false
    }
    this.handleRedirect = this.handleRedirect.bind(this);
  }
 
  handleSubmit = (props) => {
    const { cookies } = props
    const userData = cookies.get('login-res')
    console.log(userData)
    const token = userData.access 
    console.log(token)
      axios.post(HOST_API +'zist/vendor/', '',
       { headers: { "Authorization": `Bearer ${token}` } }
       ) 
    .then(res => {
      console.log(res)
        if (res.status === 201) {
          axios.post(HOST_API +'zist/vendor/business/', {
              name: props.name,
              business_type: props.natureOfBusiness,
              bio: props.niche,
              email: props.email,
              tel: props.tel,
              location: props.location,
              // metadata: props.niche
            },
              { headers: { "Authorization": `Bearer ${token}` } }
            ).then( res => {
              console.log(res) 
              if (res.status === 201) {
                const id = res.data.id
                cookies.set('business-id', id, { path: '/' });
                this.setState({ modalOpen: true })
              }
            }).catch( error => {
              toast.error(`${error}`, {
                className: 'toast',
                draggable: true,
                position: toast.POSITION.TOP_CENTER,
                type: toast.TYPE.ERROR,
                hideProgressBar: true
              })
            })
         
        }

      }).catch(error => {
        console.log(error)
        toast.error(`${error}`, {
          className: 'toast',
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          type: toast.TYPE.ERROR,
          hideProgressBar: true
        })
      });
  }
  handleVendorBusiness = (props) => {
    const { cookies } = props
    const token = cookies.get('access-token')
    axios.post('https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/vendor/business/', {
      name: props.name,
      business_type: props.natureOfBusiness,
      bio: props.decription,
      email: props.email,
      tel: props.tel,
      location: props.location,
      metadata: props.niche
    },
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then(res => {

        if (res.status === 201) {
          this.setState({ modalOpen: true })
        }

      }).catch(error => {
        console.log(error)
        toast.error(`${error}`, {
          className: 'toast',
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          type: toast.TYPE.ERROR,
          hideProgressBar: true
        })
      });
  }

  handleRedirect() {
    this.setState({ modalOpen: false })
    history.push('/vendor-dashboard')
  }


  render() {
    return ([
      <ContinueButton // Button to click to activate the Modal
        handleClick={() => this.handleSubmit(this.props)}
      />,
      <SuccessModal // The invisible modal itself
        key='modal1'
        modalOpen={this.state.modalOpen}
        handleClose={this.handleRedirect}
      />,
      <ToastContainer autoClose={4000} onOpen={this.errorSnackbar} />
    ])
  }
}

export default withCookies(ContinueButtonSection)