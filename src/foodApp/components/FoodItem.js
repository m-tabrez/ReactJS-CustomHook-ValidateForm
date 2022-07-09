import React, { useContext, useEffect, useState} from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import CartContext from '../store/CartContext'


const FoodItem = ({id, name, price}) => {

    const [state, dispatch] = useContext(CartContext);

    const addToCart = (id) => {
        let item = {
            id : id,
            name : name,
            price : price,
            quantity : 1
        }
       dispatch({
        type : "ADD",
        payload : item
       })
    }

    

  return (
    <div className='d-flex justify-content-between border-bottom p-3'>
        <div>
            <h3>{name}</h3>
            <p className='mb-0'>$ {price}</p>
            <Button value="Add to Cart" button={{
                type : "button",
                className : "btn btn-primary btn-sm",
                onClick : () => addToCart(id)
            }}>

            </Button>
        </div>
        <div className='d-flex align-items-center'>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">-</button>
                    <Input input={ {
                        type : 'number',
                        className : 'form-control input-sm',
                        disabled : true,
                        value : '0',
                        style : {width : '40px', padding : 0 }
                    }}/>
                <button type="button" className="btn btn-secondary">+</button>
            </div>
        </div>
    </div>
  )
}

export default FoodItem