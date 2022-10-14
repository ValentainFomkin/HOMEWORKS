import React, {useState} from 'react';
import './App.css';


export function App() {
    const [money, setMoney] = useState([
        { banknote: 'Dollars', nominal: 100, number: ' a1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' z1234567890' },
        { banknote: 'RUBLS', nominal: 100, number: ' w1234567890' },
        { banknote: 'Dollars', nominal: 100, number: ' e1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' c1234567890' },
        { banknote: 'RUBLS', nominal: 100, number: ' r1234567890' },
        { banknote: 'Dollars', nominal: 50, number: ' x1234567890' },
        { banknote: 'RUBLS', nominal: 50, number: ' v1234567890' },
    ])
    return (

        <ul>
            {money.map((objFromMoneyArr)=>{
                return (
                    <li>
                        <span>{objFromMoneyArr.banknote}</span>
                        <span>{objFromMoneyArr.nominal}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>

    );
}