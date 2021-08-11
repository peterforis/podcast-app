import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function MenuItem(props) {

    const path = 'episodes/' + props.slugLink;

    const descriptionText = props.description.replace(/<[^>]+>/g, '');

    return (
        <div className={"menuItem-container"}>
            {/*<h2>Title: {props.title}</h2>*/}
            <Link to={path}><h2>{props.title}</h2></Link>
            <div>Duration: {props.duration}</div>
            <p className={"menuItem-text"}>Description: {descriptionText}</p>
        </div>
    )
}

export default MenuItem;