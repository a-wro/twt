import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    render() {
        const { login } = this.props
        console.log(login)
        return (
            <nav>
                <Link to="/tweets"> Tweets </Link>
                <Link to="/user"> Account </Link>
                <Link to="/login"> { login ? 'Log out' : 'Login' } </Link>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Navbar)