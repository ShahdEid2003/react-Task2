import React from 'react'


export default function PortfiolioICard({image}) {
  return (
    <div className="portfolio-card col-lg-4 col-md-6 d-flex align-items-center justify-content-center g-5">
      <img src={image} alt="Portfolio Item" />
    </div>
  )
}
