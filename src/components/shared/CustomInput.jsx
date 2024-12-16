import React from 'react'

export default function CustomInput({type,text,placeholder}) {
  return (
    <>
      <div class="input-item col-lg-12  p-2">
      <label for={type}>{text}</label>
      <input type={type} placeholder={placeholder} />
    </div>
    </>
  )
}
