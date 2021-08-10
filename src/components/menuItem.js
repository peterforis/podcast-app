import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function MenuItem(props) {

    const path = 'episodes/' + props.slugLink;

    return (
        <div className={"menuItem-container"}>
            <h2>Title: {props.title}</h2>
            <div>Duration: {props.duration}</div>
            <div>Description: {props.description}</div>
            <Link to={path}>Check details</Link>
        </div>
    )
}

export default MenuItem;