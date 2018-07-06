import React from 'react'
import LoginForm from '../forms/loginForm'
import { connect } from 'react-redux'
import { login, fetchUsers } from '../actions'

class LoginPage extends React.Component {
    componentDidMount() {
        const { users } = this.props
        if (Object.keys(users).length == 0) {
            this.props.fetchUsers()
        }  
    }

    submit = ({ name, password }) => {
        let auth = false
        const { users } = this.props
        for (const id in this.props.users) {
            if (users[id].name === name && users[id].password === password)
                auth = true
                break
        }
        auth ? this.props.login() : console.log('incorrect data')     
    }

    render() {
        return <LoginForm onSubmit={this.submit}/>
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        users: state.users,
    }
}

export default connect(mapStateToProps, { login, fetchUsers
 })(LoginPage)