import React, { Component } from 'react'
import Gif from './Settings.gif'
export default class Loader extends Component {
    render() {
        return (
            <img src={Gif} alt="gif" />
        )
    }
}
