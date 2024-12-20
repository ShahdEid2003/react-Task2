import React from 'react'

export default function Footer() {
  return (
    <>
    <section className="footer">
        <div className="container text-center ">
            <div className="row d-flex  justify-content-center align-items-center">
                <div className=" col-sm-4 col-6">
                    <h3>Location</h3>
                    <p>2215 John Daniel Drive
                    Clark, MO 65243</p>
                </div>
                <div className="col-sm-4 col-6">
                 <h3>Around the Web</h3>
                 <ul className="list-inline p-2">
                    <div className="d-flex g-5 justify-content-center">
                     <li className="list-inline-item">
                         <a className="social-item " href="#">
                             <i className="fab fa-twitter"></i>
                         </a>
                     </li>
                     <li className="list-inline-item">
                         <a className="social-item " href="#">
                             <i className="fab fa-facebook-f"></i>
                         </a>
                     </li>
                     <li className="list-inline-item">
                         <a className="social-item " href="#">
                             <i className="fab fa-linkedin-in"></i>
                         </a>
                     </li>
                     </div>
                 </ul>
                    
                </div>
                <div className="col-sm-4 col-6">
                    <h3>About Freelancer</h3>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
                    
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}
