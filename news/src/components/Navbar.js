import React, { Component } from 'react'

import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className={`fixed-top navbar navbar-expand-lg bg-body-tertiary bg-${this.props.theme}`} data-bs-theme={this.props.theme}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">S-News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={this.props.changeTheme} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={this.props.theme === 'light' ? { color: 'black' } : { color: 'white' }} htmlFor="flexSwitchCheckDefault">{this.props.theme === 'light' ? "Light Mode" : "Dark Mode"}</label>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
