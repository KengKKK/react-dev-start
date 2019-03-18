import React from 'react';
import { connect } from 'react-redux'

export class Admin extends React.Component {

    state = {
        data: {},
    }


    componentDidMount(){
        this.setState({
            data : this.props.myProps.get
        })
    }



    render() {
        const { data } = this.state
        return (
            <div className="jumbotron container text-center">
                <h3>{data.fname}</h3>
                <h3>{data.lname}</h3>

            </div >
        )
    }

}


const mapStateToProps = (state) => {
    return {
        myProps: state.data
    }
}

export default connect(mapStateToProps)(Admin)

