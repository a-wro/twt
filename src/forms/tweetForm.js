import { Field, reduxForm } from 'redux-form'
import React from 'react'

let tweetForm = props => {
    const { onSubmit, handleSubmit } = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field name="text" type="text" component="textarea" />
            <button type="submit"> tweetForm </button>
        </form>
    )
}

export default reduxForm({
    form: 'tweetForm'
})(tweetForm)
