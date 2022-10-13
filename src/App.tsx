import React from 'react';
import './App.css';
import {Button} from "./components/Button";

export function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log('im stupid button :(')
    }
    return (

        <div className='App'>
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}

            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('im Vasya', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('im Ivan', 23)}/>
            <Button name={'stupid button'} callBack={Button3Foo}/>
        </div>

    );
}