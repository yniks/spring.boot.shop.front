import React,{Component} from 'react'

class InTheBox extends Component {
    constructor(){
        super()
        this.state={
            message: 'In the box'
        }
        //window.f=this;
    }
    changeMessage(){
        this.setState({
            message:'what is in the box details '
        })
    }
    render()
    {
    return(
        <div>
         <h1>{this.state.message}</h1>
         <button onClick={()=>this.changeMessage()}>In the Box</button>
             </div>
            )
        }
}
export default InTheBox