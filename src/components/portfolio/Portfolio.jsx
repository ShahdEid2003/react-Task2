import React from 'react'
import PortfolioCard from './PortfiolioICard'

export default function Portfolio() {
  const portfolioItems = [
    { id: 1, image: "./cabin.png"},
    { id: 2, image: './cake.png'},
    { id: 3, image: './circus.png'},
    { id: 4, image: './game.png'},
    { id: 5, image: './safe.png'},
    { id: 6, image: './submarine.png'},
  ];
  return (
    <>
    <section className='portfolio'>
    <div className="container text-center">
      <h2 className="fw-bold mb-4">PORTFOLIO</h2>
      
      <div className="row">
        {
        portfolioItems.map((item)=>
          <PortfolioCard {...item}/>
        )
        }
      </div>
    </div>
    </section>
      
    </>
  )
}
