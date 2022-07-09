import React, { useContext } from 'react'
import Button from '../../UI/Button'
import CartContext from '../store/CartContext'

const Header = () => {

  const state = useContext(CartContext);


  return (
    <>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Food App</a>
            <form className="form-inline">
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                <Button value="Cart" button={{
                    className : "btn btn-outline-success my-2 my-sm-0",
                    type : "button",
                }}>
                    &nbsp; <span className="badge badge-light"></span>
                </Button>
            </form>
        </nav>
    </>
  )
}

export default Header