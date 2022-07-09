import React, {useEffect, useState} from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Container from '../UI/Container'
import Input from '../UI/Input'
import useInputValidate from './useInputValidate'

const ValidationHome = () => {

   const {
    enteredVal : enteredName, 
    isTouched : nameIsTouched, 
    isValid : nameIsValid,
    onChangeHandler : nameOnChangeHandler,
    onBlurHandler : nameBlurHandler} = useInputValidate()

    const {
    enteredVal : enteredCity, 
    isTouched : cityIsTouched, 
    isValid : cityIsValid,
    onChangeHandler : cityOnChangeHandler,
    onBlurHandler : cityBlurHandler} = useInputValidate()

    const [isFormValid, setIsFormValid] = useState(false)

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        if(nameIsValid && cityIsValid){
            setIsFormValid(true)
        }else{
            setIsFormValid(false)
        }
    }, [nameIsValid, cityIsValid])


  return (
    <Container>
        <Card>
            <form onSubmit={onSubmitHandler}>
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter Name',
                    label : 'User Name',
                    value : enteredName,
                    onChange : nameOnChangeHandler,
                    onBlur : nameBlurHandler
                }}/>
                {nameIsTouched && !nameIsValid && <p>Enter a valid name</p>}
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter City',
                    label : 'User City',
                    value : enteredCity,
                    onChange : cityOnChangeHandler,
                    onBlur : cityBlurHandler
                }}/>
                {cityIsTouched && !cityIsValid && <p>Enter a valid city Name</p>}
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter Mail',
                    label : 'User Mail'
                }}/>

                <Button value="Submit" button={{
                    type : 'submit',
                    className : 'btn btn-primary',
                    disabled : !isFormValid
                }}/>
            </form>
        </Card>
    </Container>
  )
}

export default ValidationHome