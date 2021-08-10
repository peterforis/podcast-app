import React, {useEffect, useState} from 'react';
import axios from "axios";
import ReactPlayer from "react-player";
import '../App.css';

export default function Episode(props) {

    const {episodeSlug} = props.match.params;

    const [episode, setEpisode] = useState([]);

    const getEpisode = () => {
        const url = 'https://public-api.pod.co/podcasts/create-reach-inspire/episodes/' + episodeSlug;
        axios.get(url)
            .then(response => {
                    if (response.status === 200) {
                        setEpisode(response.data.data);
                        console.log(response.data.data.url)
                    } else {
                        console.log("Error occured with code: ", response.status);
                    }
                }
            )
            .catch(error => console.log(error.response));
    }

    useEffect(() => getEpisode(), []);

    const playNext = () => {
        
    }

    return (
        <div>
            {/*TODO*/}
            <p>Title: {episode.title}</p>
            <p>Artist: {episode.author}</p>
            <p>Duration: {episode.duration} </p>
            <ReactPlayer url={episode.url} height={"50px"} onEnded={playNext()} playing={false} controls={true}/>
        </div>
    )
}