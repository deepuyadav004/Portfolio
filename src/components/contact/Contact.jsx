import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>deepuyadavze@gmail.com</h5>
            <a href='mailto:deepuyadavze@gmail.com'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Message on twitter</h5>
            <a href='#'>Send a message</a>
          </article>

          <article className='contact__option'>
            <SiDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>Message on Discord</h5>
            <a href='#'>Send a message</a>
          </article> 
        </div>
        {/* ENT OF CONTACT OPTIONS */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message'  rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact