import React from "react"

type TypeHeader = {
    title: string
}


export const Header = (props: TypeHeader) => {
    return (
        <>{props.title}</>
    )
}