import React from 'react'
import CustomDivder from '../shared/CustomDivder.jsx'

export default function MainVeiw() {
  return (
    <>
    <div className="main-veiw">
      <div className=" container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <img src='./logo.svg' className="logo"/> 
                <h1>Start Bootstrap</h1> 
                <CustomDivder backgroundColor="white"/>
                <p className='fw-bold'>Graphic Artist - Web Designer - Illustrator</p>
            </div>  
        </div>
      </div>
    </div>
    </>
  )
}
