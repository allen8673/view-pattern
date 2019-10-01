// import React from 'react'
import css from './hi.css'

export default class extends React.Component
{
    constructor(props){
        super(props);
        
        this.state = {
            name:props.name,
            message : props.name? 'hi '+ props.name : "Who r U"
        }
    }

    Sayhi = (event)=>{
            this.setState({
                name: event.target.value,
                message : event.target.value? 'hi '+ event.target.value : "Who r U"})
    }

    render(){
        return(
            <div className='input'>
                <input type="text" value={this.state.name} onChange={this.Sayhi}/>
                <div>{this.state.message} </div>
            </div>
           )
    }
}