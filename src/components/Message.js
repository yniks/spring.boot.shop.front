import React,{Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state={
            message: 'welcome visitor'
        }
        window.f=this;
    }
    changeMessage(){
        this.setState({
            message:'thank you for suscribing'
        })
    }
    render()
    {
    return(
        <div>
         <h1>{this.state.message}</h1>
         <button onClick={()=>this.changeMessage()}>suscribe</button>
             </div>
            )
        }
}
export default Message