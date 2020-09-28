import React, { Component } from 'react'

class Counter extends Component {
    /**
     * 
     * @param {{rate:number}} props argumnets
     */
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            price:0
        }
    }
    onChange(e)
    {   console.log(this.state.count*this.props.rate)
        var newcount=Number(e.target.value)
        this.setState({
            count:newcount,
            price:newcount*this.props.rate
        })
    }
    increment() {
        this.setState(
            {
                count: this.state.count + 1
            },
            () =>
                console.log('callback value', this.state.count));
    }
    render() {
        return (
            <div>
                <input id="count" type="number" value={this.state.count} onChange={(e)=>this.onChange(e)} />
                <input disabled  id="cost" value={this.state.price} />
            </div>
        )
    }
}

export default Counter
