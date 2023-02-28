import React from 'react'
export const useForm = (initialForm = {})=> {
    const [formState, setFormState] = React.useState(initialForm)
    const onInputChange = ({target})=> {
    
        setFormState({
            ...formState,
            [target.name]: target.value
        })

    }
    const onResetForm = ()=> setFormState(initialForm)
    return {...formState, formState, onInputChange, onResetForm}
}
