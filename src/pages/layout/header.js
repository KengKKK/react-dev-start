import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


export default class MyHeader extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    as={NavLink}
                    to="/"
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink}
                    to="/user"
                    name='user'
                    active={activeItem === 'user'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink}
                    to="/admin"
                    name='admin'
                    active={activeItem === 'admin'}
                    onClick={this.handleItemClick}
                />

            </Menu>
        )
    }
}
