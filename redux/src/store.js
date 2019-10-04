import { createStore } from 'redux'
import {stateApp} from './reducer'

const store = createStore(stateApp);
store.subscribe(() => console.log(store.getState()));

export {store};


