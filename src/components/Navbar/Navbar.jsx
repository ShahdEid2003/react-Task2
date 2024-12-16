import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top ">
    <div className="container">
       
            <a className="navbar-brand logo" href="#">START BOOTSTRAP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
       
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">PORTFOLIO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">CONTACT</a>
                </li>
                
            </ul>
        </div>
    </div>
    </nav>



    </>
  )
}
