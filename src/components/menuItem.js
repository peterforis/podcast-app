import React from 'react';
import '../App.css';
import axios from "axios";

export default function MenuItem (props) {

    const getEpisode = () => {
        axios.get('https://public-api.pod.co/podcasts/')
            .then(response => {
                    if (response.status === 200) {

                    } else {
                        console.log("Error occured with code: ", response.status);
                    }
                }
            )
            .catch(error => console.log(error.response));
    }

    return (
        <div className={"menuItem-container"}>
            <h2>Title: {props.title}</h2>
            <div>Duration: {props.duration}</div>
            <div>Description: {props.description}</div>
        </div>
    )
}