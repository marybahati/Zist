import React from 'react'
import { SuccessModal } from './SuccessModal';
import { ContinueButton } from './ContinueButton';
import history from './../../History';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withCookies} from 'react-cookie';



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
      const token = cookies.get('access-token')
      console.log(token)
       axios.post('https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/vendor/', {
      // data to be sent
        name: props.name,
        business_type: props.natureOfBusiness,
        bio: props.niche,
        email: props.email ,
        tel: props.tel,
      },
      { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
  
        if(res.status === 201 ){
          this.setState({ modalOpen: true })
        } 
   
       }).catch(error => {
         console.log(error)
         this.setState({errorSnackbar:true})
         toast.error("An error occurred, please fill in all the fields and check your email and password",{
           className:'toast',
           draggable: true,
           position: toast.POSITION.TOP_CENTER,
           type: toast.TYPE.ERROR,
           hideProgressBar: true
         })   
       });
  }

   handleRedirect () {
    this.setState({ modalOpen: false })
    history.push('/vendor-dashboard')
  }


  render() {
    return([
        <ContinueButton // Button to click to activate the Modal
          handleClick={ () =>  this.handleSubmit(this.props) }
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