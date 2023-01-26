import React from 'react'
import './User.css'
function User({id, name, address, phone}) {
  return (
    <div className='user'>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h3>{address.city}</h3>
      <h4>{phone}</h4>
    </div>
  )
}

export default User