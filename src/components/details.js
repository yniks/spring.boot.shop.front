import React, { Component } from 'react'

class ImageViewer extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            main:0,
            zoom:1,
            origin:{x:0,y:0}
        }
    }
    clickHandler(){
        console.log('clicked the button')
    }  
    toggleZoom(zoom)
    {
        if(zoom!==1)
        {
            document.body.onmousemove=(e)=>this.changeZoomOrigin(e)
            document.body.onmouseup=(e)=>this.toggleZoom(1)
        }
        else { document.body.onmousemove=null;document.body.onmouseup=null;}
        this.setState({
            zoom,
            origin:zoom==1?{x:0,y:0}:this.state.origin
        })
    } 
    changeZoomOrigin(e)
    {
        if(this.state.zoom===1)return;
        this.setState({
           origin:{
            x:this.state.origin.x-e.movementX,
            y:this.state.origin.y-e.movementY
           }
        })
    }
    render() {
        return (
            <div id="image-viewer">
                <div id="side-images">{this.props.images.map((t,i)=><img src={t} key={i} onClick={()=>this.setState({main:i})} className="image small" />)}</div>
                <div id="main-image"><img draggable="false" style={{transform:'scale('+this.state.zoom+')',transformOrigin:`${this.state.origin.x}px ${this.state.origin.y}px`}} src={this.props.images[this.state.main]} className="image large" onMouseDownCapture={()=>this.toggleZoom(2)}/></div>
            </div>
        )
    }
}

export default ImageViewer
