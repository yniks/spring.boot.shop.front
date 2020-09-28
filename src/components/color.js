import React, { Component } from 'react'

class Counter extends Component {
    /**
     * 
     * @param {{["colors"]}} props argumnets
     */
    constructor(props) {
        super(props)

        this.state = {
            choice: props.color || ""
        }
    }
    render() {
        return (
            <div className="color-container">
                {this.props.colors.map((color, i) => (<div className="color-box" key={i} onClick={() => this.setState({ choice: i })} style={{ backgroundColor: i == this.state.choice ? "grey" : "transparent" }} onKeyPress={(e) => (e.key == "Enter" || e.key == " ") && this.setState({ choice: i })} tabIndex="0">
                    <div className="color-circle" style={{ backgroundColor: color }}></div>
                    <div>{color}</div>
                </div>))}
            </div>
        )
    }
}

export default Counter
