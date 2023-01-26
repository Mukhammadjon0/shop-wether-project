import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { StateContext } from '../../context'
import './Navbar.css'

function Navbar() {
  const {state}=useContext(StateContext)
  return (
    <nav>
      <NavLink className={'nav-link'} to='/'>Home</NavLink>
      <NavLink className={'nav-link'} to='/users'>Users</NavLink>
      <NavLink className={'nav-link'} to='/weather'>Weather</NavLink>
      <NavLink className={'nav-link'} to='/basket'>Basket <sup>({state.basket.length})</sup></NavLink>
      
    </nav>
  )
}

export default Navbar