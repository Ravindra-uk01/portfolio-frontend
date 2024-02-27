import { useState } from 'react'
import {AppWrap, MotionWrap} from '../../wrapper'
import {images} from '../../constants'
import {client} from '../../client'
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    message : ""
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) =>{
      const {name , value} = e.target;

      setFormData({...formData, [name]: value})
  }

  const {name, email , message} = formData;

  const handleSubmit = ()=>{
      setLoading(true);

      const contact = {
        _type : 'contact',
        name : formData.name,
        email : formData.email, 
        message : formData.message,
      }

      // console.log('contact is ', contact);

      client.create(contact)
      .then(()=> {
        setLoading(false);
        setIsFormSubmitted(true);
        setFormData({
          name : "",
          email : "",
          message : ""
        })
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h2 className='head-text'>Take A Coffee & Chat with me</h2>

      <div className='app__footer-cards'>
         <div className='app__footer-card' >
           <img src={images.email} alt='Email' />
           <a href='mailto:rayalravi2001@gmail.com' className='p-text' >rayalravi2001@gmail.com</a>
         </div>

         <div className='app__footer-card' >
           <img src={images.mobile} alt='Mobile' />
           <a href='tel:+91 8882719097' className='p-text' >+91 8882719097</a>
         </div>
      </div>

     { !isFormSubmitted ? <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type='text' value={name} name='name' onChange={handleInputChange} className='p-text' placeholder='Your name' />
        </div>
        <div className='app__flex' >
          <input type='email' value={email} name='email' onChange={handleInputChange} className='p-text' placeholder='Your email' />
        </div>
        <div>
          <textarea type='textarea' value={message} name='message' onChange={handleInputChange} className='p-text' placeholder='Your message' />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit} >{loading? 'Sending...': 'Send Message'}</button>
        <a className='app__footer-resumeDownload' href="https://drive.google.com/file/d/10jyRQx8bD4b9tkJ-QMRfjmTVl8slk8lY/view?usp=drivesdk/export?format=pdf" target='_blank' download="Ravindra_resume.pdf">Download Resume</a>

      </div>
       : 
         <div>
           <h3 className='head-text'>Thank you for gettting in touch.</h3>
         </div>
      }

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)