import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setData } from '../components/store/action/data.action'

class Home extends Component {

    state = {
        data: {
            fname: '',
            lname: ''
        },

    }

    onChangeInput = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
    }


    onSubmitClick = async () => {
        const { dispatch, history } = this.props
        dispatch(setData(this.state.data))


        await history.push('/value')
    }

    render() {

        return (
            <div className="container">


                <Form onSubmit={this.onSubmitClick}>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='First name' placeholder='First name' name="fname" onChange={this.onChangeInput} />
                        <Form.Field control={Input} label='Last name' placeholder='Last name' name="lname" onChange={this.onChangeInput} />
                    </Form.Group>

                    <Button floated="right" color="red" onClick={this.onSubmit}> Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myProps: state.data
    }
}

export default connect(mapStateToProps)(Home)
