import React from "react";

type TypeFooter = {
    titleForFooter: string
}

export const Footer = (props: TypeFooter) => {
    return (
        <div>{props.titleForFooter}</div>
    )
}