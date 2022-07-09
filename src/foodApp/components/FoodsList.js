import React, { useContext } from 'react'
import Card from '../../UI/Card'
import Container from '../../UI/Container'
import CartContext from '../store/CartContext'
import FoodItem from './FoodItem'

const FoodsList = () => {

 const allItems = [
    {id : 101, foodName : "Pani Puri", price : 50},
    {id : 102, foodName : "Masala Puri", price : 100},
    {id : 103, foodName : "Bhel Puri", price : 20},
    {id : 104, foodName : "Dhahi Puri", price : 40},
];

 
  return (
    <Container>
        <div className="col-8 offset-2">
            <Card>
                {
                    allItems.map(curEle => <FoodItem key={curEle.id} id={curEle.id} name={curEle.foodName} price={curEle.price}/>)
                }
                
            </Card>
       </div>
    </Container>
  )
}

export default FoodsList