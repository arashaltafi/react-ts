import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {

    const [data, setData] = useState<any>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const reFetch = () => {
        fetchData()
    }

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            setErrorMessage('Error fetching data');
        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, errorMessage, reFetch };
}

export default useFetch;