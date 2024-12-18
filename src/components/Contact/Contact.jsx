import React from 'react'
import CustomInput from '../shared/CustomInput.jsx'
import CustomButton from '../shared/CustomButton.jsx'
import CustomDivder from '../shared/CustomDivder.jsx'

export default function Contact() {
  return (
    <>
    <section className="contact" id="page3">
        <div className="container text-center">
            <h2>Contact</h2>
            <CustomDivder backgroundColor="rgb( 44, 62, 80)"/>
            <div class="row">
              <form class="d-flex flex-column justify-content-center align-items-center" >
                <CustomInput type="text" placeholder="Name" />
                <CustomInput type="email" placeholder="Email" />
                <CustomInput type="tel" placeholder="Phone Number" />
                <div class="input-item col-lg-7  p-2 ">
                  <textarea placeholder="Message"></textarea>
                </div>
              </form>                
            </div>
            <CustomButton type="send"text='send'/>
        </div>
    </section>
      
    </>
  )
}
