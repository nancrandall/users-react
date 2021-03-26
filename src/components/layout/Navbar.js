import React, { Component } from 'react'
import propTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        title: ' sNavbar',
        icon: 'fab fa-github'
    }
    static propTypes = {
        title: propTypes.string.isRequired,
        icon: propTypes.string.isRequired,
    }
    render() {
        return (
            <nav className="navbar bg-dark" > 
                <h1>
                <i className={this.props.icon}></i> 
                {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
