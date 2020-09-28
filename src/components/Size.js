import React, { Component } from 'react'

class RamStorage extends Component {
    /**
     * 
     * @param {{["ramStorage"]}} props argumnets
     */
    constructor(props) {
        super(props)

        this.state = {
            choice: props.color || ""
        }
    }
    render() {
        return (
            <div className="Spec-container">
                {this.props.specs.map((spec, i) => (<div className="color-box spec-box" key={i}
                    onClick={() => this.setState({ choice: i })} onKeyPress={(e) => (e.key == "Enter" || e.key == " ") && this.setState({ choice: i })} style={{ backgroundColor: i == this.state.choice ? "grey" : "transparent" }} tabIndex="0">
                    <div className="color-circle size-circle" style={{ backgroundColor: "black" }}>{spec.ram}</div>
                    <div>{spec.storage}</div>
                </div>))}
            </div>
        )
    }
}

export default RamStorage
