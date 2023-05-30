import React, { useState } from "react";
import { Sub } from "../../types";

interface FormState{
    inputValues: Sub
}

interface FormProps {
onNewSub: (newSub: Sub) => void
}

const INICIAL_STATE ={
nick: '',
subMonths: 0,
avatar: '',
description: ''
}

const Form = ({onNewSub}: FormProps) =>{
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INICIAL_STATE)

const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
evt.preventDefault()
onNewSub(inputValues)
handleClear()
}
    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        });
    }
  
    const handleClear=() => {
        setInputValues({
            nick: '',
            subMonths: 0,
            avatar: '',
            description: ''

        })
    }

return(
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick' />
            <input onChange={handleChange} value={inputValues.subMonths} type='text' name='subMonths' placeholder='subMonths' />
            <input onChange={handleChange} value={inputValues.avatar}  name='avatar' placeholder='avatar' />
            <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description' />
            <button type='button' >Clear the form</button>
            <button type='submit' >Save new sub!</button>
        </form>
    </div>
)
}





export default Form