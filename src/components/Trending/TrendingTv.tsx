import useTrendingList from '@/hooks/useTrending'
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from 'react';
import TvShowCard from '../TvShowCard';
import type { TvShowResult } from "@/hooks/useTvShow";

// interface TvShow {
//     id: number;
//     name: string;
//     original_name: string;
//     poster_path: string | null;
//     backdrop_path: string | null;
//     overview: string;
//     first_air_date: string;
//     original_language: string;
//     popularity: number;
//     vote_average: number;
//     vote_count: number;
//     adult: boolean;
// }

const TrendingTv = () => {
    const { trendingData } = useTrendingList<TvShowResult>("tv");
    //console.log(trendingData);
    const [expand, setExpand] = useState(false);

    return (
        <div className='p-3 mb-4'>
 
            <div className='flex items-center cursor-pointer' onClick={() => setExpand(!expand)}>
                <h1 className='text-2xl font-semibold p-3 py-2 text-[#2c2576] dark:text-[#cfc7f5]'>Trending Tvshows</h1>
                <span className='text-2xl dark:text-[#cfc7f5] text-[#40366e]'><MdOutlineExpandMore />
                </span>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-1">

                {expand && trendingData?.map((tvshow) => {
                    return <div key={tvshow.id}>
                        <TvShowCard tvShowRes={tvshow} />
                    </div>
                })}
                {!expand && trendingData?.slice(0, 8).map((tvshow) => {
                    return <div key={tvshow.id}>
                        <TvShowCard tvShowRes={tvshow} />
                    </div>
                })}

            </div>

        </div>
    )
}

export default TrendingTv