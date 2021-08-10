import React from 'react';
import '../App.css';

export default function MenuItem (props) {
    return (
        <div className={"menuitem-container"}>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <a href={props.link} />
        </div>
    )
}