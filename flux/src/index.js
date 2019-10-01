import React, { Suspense, lazy } from 'react'
import ReactDOM, { render } from "react-dom";
import './index.css';
import {Dispatcher} from 'flux'


const dispatcher = new Dispatcher();


// var Store1 = {
//     nameh: 'bj',
//     changeName: function(text)
//     {
//         this.nameh = text;
//     },
//     getData()
//     {
//         return this.nameh;
//     },
// };

// var Store2 = {
//     acount: 0,
//     addCount: function(int) {
//         this.acount += int;
//     },
//     getData() {
//         return this.acount;
//     },
// };

const handler1 = (payload) =>
{
    if (payload.type === 'CHANGE_NAME')
    {
        Store1.changeName(payload.value);
    }
};

const handler2  = (payload) =>
{
    if (payload.type === 'ADD_COUNT')
    {
        Store2.addCount(payload.value);
    }
};

dispatcher.register(handler1)
dispatcher.register(handler2)

const App = () =>
{
    dispatcher.dispatch({
        type: 'CHANGE_NAME',
        value: 'Allen'
    });

    dispatcher.dispatch({
        type: 'ADD_COUNT',
        value: 3
    });

    console.log('Store1 value : ' + Store1.getData());
    console.log('Store2 value : ' + Store2.getData());

    return (<div>
        src: <Hi/>
    </div>)
}


ReactDOM.render(<App />, document.getElementById("app"))
