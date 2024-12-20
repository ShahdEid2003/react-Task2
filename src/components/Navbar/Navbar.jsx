import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light  sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          START BOOTSTRAP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#page1">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#page2">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#page3">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



    </>
  )
}
