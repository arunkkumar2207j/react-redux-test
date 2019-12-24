import React, { Component } from 'react'
import './headline.scss'

class Headline extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {header, desc }  = this.props;
        if(!header) {
            return null
        }
        return (
            <div data-test="headlineComponent" className="headlineComponent">
                <h2>{header}</h2>
                <p>{desc}</p>
            </div>
        )
    }
}
export default Headline