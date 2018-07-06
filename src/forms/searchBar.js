import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { format } from 'util';

let SearchBar = props => {
    const { handleSubmit, onSubmit } = props
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Field name="keyword" component="input" />
        </form>
    )
}

export default reduxForm({
    form: 'search'
})(SearchBar)