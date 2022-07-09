import React, {useState} from 'react'

const useInputValidate = () => {
  
  const [enteredVal, setEnteredVal] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const onChangeHandler = (event) => {
    setIsTouched(true)
    setEnteredVal(event.target.value)
    if(event.target.value === ''){
        setIsValid(false)
    }else{
        setIsValid(true)
    }
  }

  const onBlurHandler = () => {
    setIsTouched(true)
    if(enteredVal === ''){
        setIsValid(false)
    }else{
        setIsValid(true)
    }
  }
  
    return {
        enteredVal,
        isTouched,
        isValid,
        onChangeHandler,
        onBlurHandler
  }
}

export default useInputValidate