import React, { Component } from 'react'
import { connect } from 'react-redux'


class Common extends Component {
    state = { }



    render() {

        return (
            <div>

                <div className="jumbotron ">
                    <h1 align="center">Common</h1>
                </div>



            </div>
        )
    }

    onchangeInput() {
    }
}

const mapStateToProps = (state) => {
    return {
        // post: state.event.data
    }
}


export default connect(mapStateToProps)(Common)