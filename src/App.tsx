import React from 'react';
import './App.css';
import {Button} from "./components/Button";

export function App() {
    const Button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    return (

        <div className='App'>
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}

            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('im Vasya')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('im Ivan')}/>

        </div>

    );
}