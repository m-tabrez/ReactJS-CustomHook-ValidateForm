import React from 'react'
import { CartContextProvider } from '../store/CartContext'
import Banner from './Banner'
import FoodsList from './FoodsList'
import Header from './Header'

const FoodApp = () => {
  return (
    <>
        <CartContextProvider>
            <Header />
            <Banner />
            <FoodsList />
        </CartContextProvider>
    </>
  )
}

export default FoodApp