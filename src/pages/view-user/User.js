import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setData } from '../../components/store/action/data.action'
import ModalShowValue from './components/ModalShowValue'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]
class User extends Component {

    state = {
        data: {},
        accept: true,
        callModal: false
    }

    onGenderSelect = (e, { value }) => {
        this.setState({
            data: { ...this.state.data, sex: value }
        })
    }

    onQuantityChange = (e, { value }) => {
        console.log(value)
    }
    onChangeInput = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
    }
    onAcceptClick = () => {
        this.setState({
            accept: !this.state.accept
        })
    }

    onSubmitClick = async () => {
        const { dispatch } = this.props
        dispatch(setData(this.state.data))
        this.setState({
            callModal: true
        })
        // await history.push('/admin')
    }

    render() {
        const { value, accept, callModal , data } = this.state

        return (
            <div className="container">

                <ModalShowValue open={callModal} value={data}/>

                <Form onSubmit={this.onSubmitClick}>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='First name' placeholder='First name' name="fname" onChange={this.onChangeInput} />
                        <Form.Field control={Input} label='Last name' placeholder='Last name' name="lname" onChange={this.onChangeInput} />
                        <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' onChange={this.onGenderSelect} />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Quantity</label>
                        <Form.Field
                            control={Radio}
                            label='One'
                            value='1'
                            checked={value === '1'}
                            onChange={this.onQuantityChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Two'
                            value='2'
                            checked={value === '2'}
                            onChange={this.onQuantityChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Three'
                            value='3'
                            checked={value === '3'}
                            onChange={this.onQuantityChange}
                        />
                    </Form.Group>
                    <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' name="about" onChange={this.onChangeInput} />
                    <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' onChange={this.onAcceptClick} />
                    <Button floated="right" disabled={accept} color="red" onClick={this.onSubmit}> Submit</Button>
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

export default connect(mapStateToProps)(User)
