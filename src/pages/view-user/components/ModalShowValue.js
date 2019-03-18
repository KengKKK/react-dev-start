import React from 'react'
import { Button, Modal, Icon, Header } from 'semantic-ui-react'


export class ModalShowValue extends React.Component {

    state = {
        isOpen: false,
        data: {}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isOpen: nextProps.open,
            data: nextProps.value
        })
    }

    onModalClick = () => [
        this.setState({
            isOpen: false
        })
    ]

    render() {
        const { isOpen, data } = this.state
        return (
            <React.Fragment>

                <Modal
                    open={isOpen}
                    className="scrolling"
                    size='mini'
                    centered
                >
                    <Header icon='edit outline' content='Your Data Form Input' />
                    <Modal.Content>
                        <p>
                            {data.fname}
                        </p>
                        <p>
                            {data.lname}
                        </p>
                        <p>
                            {data.sex}
                        </p>

                    </Modal.Content>
                    <Modal.Actions>

                        <Button color='green' inverted onClick={this.onModalClick}>
                            <Icon name='checkmark' /> Yes
                    </Button>
                    </Modal.Actions>
                </Modal>



            </React.Fragment>
        )
    }

}





export default ModalShowValue
