import type { TvShowResult } from "@/hooks/useTvShow"
import "../App.css";
import { useNavigate } from "react-router";

interface props {
    tvShowRes: TvShowResult
}

const TvShowCard = ({ tvShowRes }: props) => {

    const navigate = useNavigate(); 

    return (
        <div>
            <div onClick={() => {
                navigate(`/playerr/${tvShowRes.id}`)
            }} className="tvshow-card h-[500px] flex flex-col rounded-xl p-4 bg-[#b1c0e9] dark:bg-[#0d0620] overflow-hidden dark:shadow-[0_8px_25px_rgba(0,0,0,0.4)] shadow-[0_6px_18px_rgba(59,78,163,0.60)] border dark:border-white/10 border-[#525eb3] duration-300 ">

                <img src={`https://image.tmdb.org/t/p/w500${tvShowRes.poster_path}`} alt="poster"
                    className="card-image h-[400px] rounded-xl"
                />

                <div className="p-2">
                    <h2 className="text-[14px] font-bold dark:text-white text-[#1E1B3A] line-clamp-2">{tvShowRes.name}</h2>
                </div>

                <div className=" flex gap-2 items-center text-sm dark:text-gray-300 text-[#322b5f]">
                    <span className="font-semibold flex items-center">⭐ { tvShowRes.vote_average.toFixed(1)}</span> • {tvShowRes.original_language} • {tvShowRes.first_air_date?.split("-")[0]}
                </div>

            </div>

        </div>
    )
}

export default TvShowCard

//card-border 8086b4