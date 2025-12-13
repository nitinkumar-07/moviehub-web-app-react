import useTrendingList from '@/hooks/useTrending'
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from 'react';
import TvShowCard from '../TvShowCard';

const TrendingTv = () => {
    const { trendingData } = useTrendingList("tv");
    //console.log(trendingData);
    const [expand, setExpand] = useState(false);

    return (
        <div className='p-3 mb-4'>

            <div className='flex items-center cursor-pointer' onClick={() => setExpand(!expand)}>
                <h1 className='text-2xl font-semibold p-3 py-2 text-[#cfc7f5]'>Trending Tvshows</h1>
                <span className='text-2xl text-[#cfc7f5]'><MdOutlineExpandMore/> 
                </span>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-1">
                {expand && trendingData?.map((tvshow)=>{
                    return <div key={tvshow.id}>
                        <TvShowCard tvShowRes = {tvshow}/>
                    </div>
                })}
                {!expand && trendingData?.slice(0, 8).map((tvshow)=>{
                    return <div key={tvshow.id}>
                        <TvShowCard tvShowRes = {tvshow}/>
                    </div>
                })}
            </div>

        </div>
    )
}

export default TrendingTv