// @ts-nocheck 

import { searchResultContext } from '@/context/searchResult.context'
import useMultiSearch from '@/hooks/useMultiSearch';
import { useContext } from 'react'
import MovieCard from './MovieCard';
import TvShowCard from './TvShowCard';

const SearchList = () => {

    const { searchData, searchText } = useContext(searchResultContext);
    useMultiSearch(searchText);

    const filtered = searchData?.filter((data) =>
        (data.media_type === "movie" || data.media_type === "tv") &&
        data.poster_path && (data.title || data.name)
    );

    if (!filtered || filtered.length === 0) {
        return (
            <div className="text-center dark:text-[#cfc7f5] text-2xl mt-16">
                No results found for <span className="text-red-400 bg-">{searchText}</span> 
            </div>
        );
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {filtered.map((data) => (
                <div key={data.id}>
                    {data.media_type === "movie" ? (
                        <MovieCard movieRes={data} />
                    ) : (
                        <TvShowCard tvShowRes={data} />
                    )}
                </div>
            ))}
        </div>
    );

}

export default SearchList