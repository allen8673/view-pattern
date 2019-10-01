import { Dispatcher } from 'flux'
import { CountStore } from './stores/countStore'
import { NameStore } from './stores/nameStore'

const dispatcher = new Dispatcher();

dispatcher.register((payload)=>
{
    if (payload.type === 'CHANGE_NAME')
    {
        CountStore.setData(payload.value);
    }
});
dispatcher.register((payload)=>
{
    if (payload.type === 'ADD_COUNT')
    {
        NameStore.setData(NameStore.getData() + payload.value);
    }
});

export const Action = {


    getData(type){
        switch(type)
        {
            case 'COUNT':
                return CountStore.getData();
            case 'NAME':
                return NameStore.getData();
            default:
                return null;
        }
    }
}