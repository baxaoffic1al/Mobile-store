import { useEffect, useState } from 'react'
import axios from 'axios'

function useData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=>{
        (async function() {
            setLoading(true)
            try {
                const result = await axios.get(`https://dummyjson.com${url}`,{
                    params:{
                        limit:100
                    }
                })
                setData(result?.data)
                setLoading(false)
            } catch (err) {
                setError(err?.message)
                setLoading(false)
            }
        })()
    },[url])
  return [data,loading,error]
}

export default useData