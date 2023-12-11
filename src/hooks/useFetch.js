import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=> {
        const fetchData =async() => {
            setLoading(true);
            try {
                const response = await fetch(url)
                console.log(response)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const result = await response.json();
                setLoading(false);
                setData(result);  
            } catch (err) {
                setError("Error fetching from API")
                console.error("-----",err.message);
            }

            //console.log(result);
        }
        fetchData();
    },[url])

  return {data,loading,error}
}

export default useFetch
