import React, { Component } from 'react'

class Accordian extends Component {
    /**
     * 
     * @param {{rate:number}} props argumnets
     */
    constructor(props) {
        super(props)

        this.state = {
            closed: props.initial || "closed"
        }
    }
    toggle() {
        console.log("hi");
        if (this.state.closed == 'closed')
            this.setState({ closed: "open" })
        else this.setState({ closed: "closed" })
    }
    render() {
        return (
            <div>
                <div className="accordian-header" onClick={() => this.toggle()} onKeyPress={(e) => (e.key == "Enter" || e.key == " ") && this.toggle()} tabIndex="0">
                    <div className="header-text">{this.props.header}</div>
                    <div className="header-flag">{this.state.closed == 'closed' ? "↑" : "↓"}</div>
                </div>

                <div className="accordian-content" style={{ maxHeight: this.state.closed == 'closed' ? 0 : '100%' }}>
                    <ul className="acc-unordered-list">
                        {this.props.text.map((line, i) => <li key={i}>{line}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Accordian
