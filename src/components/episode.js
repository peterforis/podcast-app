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
                    } else {
                        console.log("Error occured with code: ", response.status);
                    }
                }
            )
            .catch(error => console.log(error.response));
    }

    useEffect(() => getEpisode(), []);

    return (
        <div className={"episode-container"}>
            {/*TODO*/}
            <p>Title: {episode.title}</p>
            <p>Artist: {episode.author}</p>
            <ReactPlayer className={"episode-reactPlayer"} url={episode.url} height={"50px"}
                         playing={false} controls={true}/>
        </div>
    )
}