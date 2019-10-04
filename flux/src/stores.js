import {EventEmitter} from 'events'

export const CountStore = {
    ...EventEmitter.prototype,
    count: 0,
    setValue(count)
    {
        this.count = count;
    },
    getData()
    {
        return this.count;
    },
};

export const NameStore = {
    ...EventEmitter.prototype,
    name: '',
    setValue(name)
    {
        this.name = name;
    },
    getData()
    {
        return this.name;
    },
};

