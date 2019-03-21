import React, { Component } from 'react'
// import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Value extends Component {

    state = {
        data: {}
    }
    componentDidMount() {
        this.setState({
            data: this.props.myProps.data
        })
    }
    render() {
        const { data } = this.state
        return (
            <div className="jumbotron container text-center">
            
                <h1>{data.fname}</h1>
                <h1>{data.lname}</h1>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myProps: state.data
    }
}

export default connect(mapStateToProps)(Value)
