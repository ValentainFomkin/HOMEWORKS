import React from 'react';
import './App.css';
import {Button} from "./components/Button";

export function App() {
    return (
        <div className='App'>
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}
            <Button name={'MyYouTubeChanel-1'}/>
            <Button name={'MyYouTubeChanel-2'}/>
        </div>

    );
}