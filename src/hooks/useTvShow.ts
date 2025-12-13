import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react';

export interface TvShowResult {
    adult: boolean;
    id: number;
    original_language: string;
    original_title: string;
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    video: boolean;
    vote_average: number;
    release_date: string;
    first_air_date?:string;
    name?: string;
}


const useTvShowList = () => {
    const [tvShowLists, setTvShowLists] = useState<TvShowResult[]>()

    const fetchTvShowList = async () => {

        const res = await apiClient.get("/discover/tv")
        setTvShowLists(res.data.results)
        //console.log(res);
    }

    useEffect(() => {
        fetchTvShowList();
    }, [])

    return { tvShowLists }
}

export default useTvShowList
