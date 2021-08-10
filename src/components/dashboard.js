import axios from 'axios';
import React, {useEffect, useState} from 'react';
import MenuItem from "./menuItem";

export default function Dashboard() {

    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = () => {
        //https://public-api.pod.co/podcasts/{podcast_slug}
        axios.get('https://public-api.pod.co/podcasts/create-reach-inspire/episodes')
            .then(response => {
                    if (response.status === 200) {
                        setEpisodes(response.data.data);
                        // console.log("200");
                    } else {
                        console.log("Error occured with code: ", response.status);
                    }
                }
            )
            .catch(error => console.log(error.response));
    };

    useEffect(() => getEpisodes(), []);

    return (
        <div>
            <div>
                {episodes.map((episode) => (
                    <MenuItem key={episode.id} title={episode.title} author={episode.author} link={"link"}/>
                ))}
            </div>
        </div>
    )
}