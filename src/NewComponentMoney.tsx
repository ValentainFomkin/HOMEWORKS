import React from "react";
import {BanknoteType, FilterType} from "./App";

type Props = {
    onclickFilterHandler: (nameButton: FilterType) => void
    currentMoney: BanknoteType[]
}

export const NewComponentMoney = (props: Props) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button style={{marginRight: '10px'}} onClick={() => props.onclickFilterHandler('all')}>All</button>
                <button style={{marginRight: '10px'}} onClick={() => props.onclickFilterHandler('RUBLS ')}>RUBLS</button>
                <button onClick={() => props.onclickFilterHandler('Dollars ')}>Dollars</button>
            </div>
        </>
    )
}