import {Input, Button} from 'antd'
import {Action} from './action'  
import {CountStore, NameStore} from './stores'  

class App extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state  = {
            name : 'NAME',
            count : 0
        };

        CountStore.on('change', ()=>{
            this.setState({name: CountStore.getData()})
        });
        
        NameStore.on('change', ()=>{
            this.setState({name: NameStore.getData()})
        })
    }

    render(){
        const { name } = this.state;
        return (
        <div>
            <span>{name}</span> <br/>
            <Button onClick={(event)=>{
               Action.setData({
                   type: 'CHANGE_NAME',
                   value:'Allen'
               })
           }}>change name</Button>
        </div>)
    }
}


ReactDOM.render(<App />, document.getElementById("app"))
