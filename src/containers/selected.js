import React from 'react'
import { connect } from 'react-redux'

class Selected extends React.Component {
    render() {
        console.log(this.props.selected)
        return (
            <div>
                
            </div>
        )
    }
}
/*
const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}
*/
export default connect(mapStateToProps)(Selected)