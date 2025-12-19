import apiClient from "@/services/api-client"
import { useEffect, useState } from "react"


interface TrendingResponse<T> {
  results: T[];
}


const useTrendingList = <T,>(trending : string = "movie") =>{

    const [trendingData, setTrendingData] = useState<T[]>([]);

    const fetchTrending = async () =>{
        try {
            const res = await apiClient.get<TrendingResponse<T>>(`trending/${trending}/day`);
            setTrendingData(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>{
        fetchTrending();
    },[])

    return{ trendingData, setTrendingData }
};


export default useTrendingList;