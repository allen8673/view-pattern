// import Store from './store'
import {action} from 'mobx'

// const store = new Store();

export default class{
    constructor({store}){
        this.store = store;
    };

    @action 
    changeName=()=>{
        this.store.name = '王小明'
    };

    @action
    increaseCount=()=>{
        this.store.count++;
    }

    @action
    decreaseCount=()=>{
        this.store.count--;
    }
}