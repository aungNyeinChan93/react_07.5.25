import { useEffect, useState } from "react"

const useGetData = (url) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isError, setError] = useState()

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            setError(error)
        }
    };
    useEffect(() => {
        fetchData(url)
    }, [url]);

    return { isLoading, isError, data }
}

export default useGetData;