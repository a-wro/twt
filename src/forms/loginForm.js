import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
    const { handleSubmit, onSubmit } = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field name="name" component="input" />
            <Field name="password" component="input" />
            <button type="submit"> Login </button>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)