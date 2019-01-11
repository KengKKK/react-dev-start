import React, { Component } from 'react'
import { connect } from 'react-redux'


class Common extends Component {
    state = {}



    render() {
        console.log(this.props.post);
        const via = this.props.post.map((event, i) =>
            <p key={i}>{event.key} : {event.value}</p>
        )
        return (

            <div>

                <div className="jumbotron ">
                    <h1 align="center">From Redux</h1>
                </div>
                <div className="container">
                    {via}
                </div>


            </div>
        )
    }

    onchangeInput() {
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.event.data
    }
}


export default connect(mapStateToProps)(Common)