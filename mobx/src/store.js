// Observable state
import {observable, computed, autoRun} from 'mobx'

export default class{

    @observable name= '';
    @observable count = 0;

    @computed get getName(){
        return this.name;
    }

    @computed get getCount(){
        return this.count;
    }

    
}