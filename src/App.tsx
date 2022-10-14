import React, {useState} from 'react';
import './App.css';
import {NewComponentMoney} from "./NewComponentMoney";

export type FilterType = 'all' | 'Dollars ' | 'RUBLS '

export type BanknoteType = {
    banknote: string
    nominal: number
    number: string
}


export function App() {
    const [money, setMoney] = useState<BanknoteType[]>([
        {banknote: 'Dollars ', nominal: 100, number: ' a1234567890'},
        {banknote: 'Dollars ', nominal: 50, number: ' z1234567890'},
        {banknote: 'RUBLS ', nominal: 100, number: ' w1234567890'},
        {banknote: 'Dollars ', nominal: 100, number: ' e1234567890'},
        {banknote: 'Dollars ', nominal: 50, number: ' c1234567890'},
        {banknote: 'RUBLS ', nominal: 100, number: ' r1234567890'},
        {banknote: 'Dollars ', nominal: 50, number: ' x1234567890'},
        {banknote: 'RUBLS ', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'Dollars ') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'Dollars ')
    }
    if (filter === 'RUBLS ') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'RUBLS ')
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <NewComponentMoney currentMoney={currentMoney} onclickFilterHandler={onclickFilterHandler}/>
        // <>
        //     <ul>
        //         {currentMoney.map((objFromMoneyArr, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span>{objFromMoneyArr.banknote}</span>
        //                     <span>{objFromMoneyArr.nominal}</span>
        //                     <span>{objFromMoneyArr.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: "35px"}}>
        //         <button style={{marginRight: '10px'}} onClick={() => onclickFilterHandler('all')}>All</button>
        //         <button style={{marginRight: '10px'}} onClick={() => onclickFilterHandler('RUBLS ')}>RUBLS</button>
        //         <button onClick={() => onclickFilterHandler('Dollars ')}>Dollars</button>
        //     </div>
        // </>
    );
}
