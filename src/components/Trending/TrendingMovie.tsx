import useTrendingList from '@/hooks/useTrending'
import { MdOutlineExpandMore } from "react-icons/md";
import MovieCard from '../MovieCard';
import { useState } from 'react';
import type { MovieResult } from "@/hooks/useMovies";

const TrendingMovie = () => {
    const { trendingData } = useTrendingList<MovieResult>("movie");
    //console.log(trendingData);
    const [expand, setExpand] = useState(false);

    return ( 
        <div className='p-3 mb-4'>

            <div className='flex items-center cursor-pointer' onClick={() => setExpand(!expand)}>
                <h1 className='text-2xl font-semibold p-3 py-2 text-[#cfc7f5]'>Trending Movies</h1>
                <span className='text-2xl text-[#cfc7f5]'><MdOutlineExpandMore/> 
                </span>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-1">
                {expand && trendingData?.map((movie)=>{
                    return <div key={movie.id}>
                        <MovieCard movieRes={movie}/>
                    </div>
                })}
                {!expand && trendingData?.slice(0, 8).map((movie)=>{
                    return <div key={movie.id}>
                        <MovieCard movieRes={movie}/>
                    </div>
                })}
            </div>

        </div>
    )
}

export default TrendingMovie