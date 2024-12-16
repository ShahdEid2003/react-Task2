import React from 'react'

export default function CustomButton({text,type}) {
    let btnClass=`btn shadow`;
    if (type=='download'){
        btnClass+=' download';
    }
    else if(type=='send'){
        btnClass+=' send';

    }
  return (
    <>
      <button className={btnClass}>{text}</button>
    </>
  )
}
