import {Input, Button} from 'antd'
import {  observer, inject } from 'mobx-react';

@inject('store', 'action')
@observer
export default class  extends React.Component 
{
    render(){
        const { store, action } = this.props;
        return (
        <div>
            <p>name = {store.name}</p>
            <p>count = {store.count}</p>
        <p>
          <Button  onClick={action.increaseCount}>增加 count</Button>
          <Button onClick={action.decreaseCount}>减少 count</Button>
          <Button onClick={action.changeName}>改變 name</Button>

        </p>
        </div>)
    }
}