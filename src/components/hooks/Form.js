import { useState } from 'react';

const Form = initialValues => {
    const [values, setValues ] = useSetValues(initialValues);
    console.log('values', values)

    return[values, e => {
        const [ name, value ] = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }]
}

export default Form;