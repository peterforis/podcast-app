import axios from 'axios';
import React, {useEffect, useState} from 'react';
import MenuItem from "./menuItem";

export default function Dashboard() {

    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = () => {
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
                <h1>These are the episodes</h1>
                {episodes.map((episode) => (
                    <MenuItem key={episode.id} title={episode.title} description={episode.description} duration={episode.duration} slugLink={episode.slug}/>
                ))}
            </div>
        </div>
    )
}