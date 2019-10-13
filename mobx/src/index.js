import { Provider, observer, inject } from 'mobx-react';
import Store from './store'
import Action from './action'
import Demo from './demo'

const store = new Store();
const action = new Action({store});

class App extends React.Component 
{
    render(){
        return (<Provider store={store} action={action}>
            <Demo/>
        </Provider>)
    }
}


ReactDOM.render(<App />, document.getElementById("app"))
