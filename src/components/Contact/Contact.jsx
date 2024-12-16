import React from 'react'
import CustomInput from '../shared/CustomInput.jsx'
import CustomButton from '../shared/CustomButton.jsx'

export default function Contact() {
  return (
    <>
    <section className="contact">
        <div className="container text-center">
            <h2>Contact</h2>
            <div class="row ">
            
                    <form>
                        <CustomInput type="text" placeholder="Name" />
                        <CustomInput type="email" placeholder="Email" />
                        <CustomInput type="tel" placeholder="Phone Number" />
                        <textarea placeholder="Message"></textarea>
                    
                    </form>
                    
            </div>
            <CustomButton type="send"text='send'/>
        </div>
    </section>
      
    </>
  )
}
