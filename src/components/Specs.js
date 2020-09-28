import React,{Component} from 'react'

class Specs extends Component {
    constructor(){
        super()
        this.state={
            message: 'technical specification'
        }
        //window.f=this;
    }
    changeMessage(){
        this.setState({
            message:'technical details  '
        })
    }
    render()
    {
    return(
        <div>
         <h1>{this.state.message}</h1>
         <button onClick={()=>this.changeMessage()}>technical specs</button>
             </div>
            )
        }
}
export default Specs