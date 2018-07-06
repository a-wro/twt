import React from 'react'
import { login } from '../actions'
import { connect } from 'react-redux'

const RequireAuth = WrappedComponent => {
    class Auth extends React.Component {
        constructor(props) {
            super(props)
        }
         
        componentWillMount() {
            const { logged } = this.props
            if (!logged) {
                this.props.history.push('/')
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
   
    const mapStateToProps = state => {
        return {
            login: state.login
        }
    }
    
    return connect(mapStateToProps, { login })(RequireAuth)
    
}

export default RequireAuth