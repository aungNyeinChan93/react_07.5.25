import { useEffect, useState } from "react"

const useGetData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState()

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            // console.log(error);
            setError(error.message)
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData(url)
    }, [url]);

    return { isLoading, isError, data }
}

export default useGetData;