import { Dispatcher } from 'flux'
import {CountStore, NameStore} from './stores'
const dispatcher = new Dispatcher();

dispatcher.register((payload)=>
{
    if (payload.type === 'CHANGE_NAME')
    {
        NameStore.setValue(payload.value);
        NameStore.emit('change');
    }else if (payload.type === 'ADD_COUNT')
    {
        CountStore.setValue(NameStore.getData() + payload.value);
        CountStore.emit('change');
    }
});

export const Action = {
    setData(payload){
        dispatcher.dispatch(payload);
    },
}