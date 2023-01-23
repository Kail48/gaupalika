import { useState, useEffect } from 'react';
import { HoverCard,Text} from '@mantine/core';
import axios from 'axios';
//returns temperature after getting it from open-meteo api
const Temperature = ({latitude,longitude}) => {
    const [temperatureData, setTemeratureData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&hourly=temperature_2m&current_weather=true')
            .then((res) => {
                setTemeratureData(res.data.current_weather.temperature);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return (loading | temperatureData==null)? 
    (
        <div>
            <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                    <i class="thermometer icon"></i>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    <Text size="sm">
                        Turn on location to view live temperature
                    </Text>
                </HoverCard.Dropdown>
            </HoverCard>
        </div>
    )
    :
    (   <div>
        <h2 class="is-size-5 is-size-7-mobile has-text-white m-0">{temperatureData}<span>&#8451;</span></h2>
        </div> 
    );
};

export default Temperature;