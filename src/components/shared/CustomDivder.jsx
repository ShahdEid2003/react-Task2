import React from 'react'

export default function CustomDivder({backgroundColor}) {
      const lineStyle = {
        height: "2px",
        width:"100px",
        backgroundColor: backgroundColor,
      };
    
      const starStyle = {
        color: backgroundColor,
        fontSize: "30px",
        margin: "0 10px",
      };
    
  return (
    <>
  
      <div className="d-flex align-items-center justify-content-center ">
        <div style={lineStyle}></div>
        <div style={starStyle}>★</div>
        <div style={lineStyle}></div>
      </div>
  
    </>
  )
}
