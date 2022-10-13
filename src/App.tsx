import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLBodyElementEventMap>) => {
    //     console.log('Hello im Vasya!')
    // }
    //
    // const mySecondSubscriber = (event: MouseEvent<HTMLBodyElementEventMap>) => {
    //     console.log('Hello im Ivan')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foo1=(name: number)=>{
        //ничего не передавать, но в консоли должно показаться 100200
        console.log(name)
    }
    const foo2=(name: number)=>{
        console.log(name)

    }

    return (
        <div className='App'>
            {/*<button onClick={(event) => {*/}
            {/*    console.log('Hello!')*/}
            {/*}}>MyYouTubeChanel-1*/}
            {/*</button>*/}
            {/*<button onClick={(event) =>onClickHandler('Vasya')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event) =>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}
            {/*<button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel-3</button>*/}

        <button onClick={(event)=>foo1(100200)}>1</button>
        <button onClick={()=>foo2(100200)}>2</button>
        </div>

    );
}