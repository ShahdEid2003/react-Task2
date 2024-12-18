import React from 'react'
import CustomButton from '../shared/CustomButton.jsx'
import CustomDivder from '../shared/CustomDivder.jsx'

export default function about() {
  return (
    <>
    <section className=" about" id="page2">
      <div className="container ">
        <div className="text-center">
          <h2 >About</h2>
        </div>
        <CustomDivder backgroundColor="white"/>

        
        <div className="row d-flex align-items-center justify-content-center ">
            <div className="col-lg-4 ">
                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

            </div>
            <div className="col-lg-4 ">
            
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>

            </div>
        </div>
        <div className="text-center">
          <CustomButton text='Free Download' type='download'/>  
        </div>
        
      </div>
      </section>
    </>
  )
}
