import React, { Component } from 'react'

class Headline extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {headline, desc} = this.props;

        if(!headline) {
            return null
        }

        return (
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{headline}</h1>
                <p data-test="desc">{desc}</p>
            </div>
        )
    }
}
export default Headline;