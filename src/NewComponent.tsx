import React from "react";

type NewComponentType = {
    // students: Array<StudentType>
    topCars: CarsType[]
}

type CarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <table>
            {props.topCars.map((Car, index)=>{
            return (
                <tr>
                    <th><span>{index+1}</span> {Car.manufacturer}</th>
                    <th>{Car.model}</th>
                </tr>
            )
            })}


        </table>


    )
}