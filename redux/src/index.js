import {Input, Button} from 'antd'
import {createStore } from 'redux'
import {store} from './store'
import * as action from './action'

class Apps extends React.Component
{
    render()
    {
        console.log('aaaa');
        console.log(store.getState());
        // console.log(store.getState())
        store.dispatch(action.changeName('allen'))
        console.log('sssss');
        console.log(store.getState());
        return (
            <div>
                <Input style={{width:'900'}}/>
            </div>
        );
    }
}

ReactDOM.render(<Apps/>, document.getElementById("app"))
