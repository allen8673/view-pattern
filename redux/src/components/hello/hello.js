import React from 'react'
import css from './hello.css'

export default class Hello extends React.Component
{
    constructor(props){
        super(props);
        
        this.state = {
            name:props.name,
            message : props.name? 'hello '+ props.name : "Who r U"
        }
    }

    Sayhello = (event)=>{
            this.setState({
                name: event.target.value,
                message : event.target.value? 'hello '+ event.target.value : "Who r U"})
    }

    render(){
        return(
            <div className='input'>
                <input type="text" value={this.state.name} onChange={this.Sayhello}/>
                <div>{this.state.message} </div>
            </div>
           )
    }
}