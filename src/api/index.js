import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// Fetches data from the covid19 api
export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);

        const modifiedData = { confirmed, recovered, deaths, lastUpdate, }
        return modifiedData;

    } catch (error) {
        
    }
}