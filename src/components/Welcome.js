import React,{Component} from 'react'

class Welcome extends Component {
    render()
    {
    return <h1>{this.props.name} a.k.a {this.props.heroname}</h1>
    }
}
export default Welcome