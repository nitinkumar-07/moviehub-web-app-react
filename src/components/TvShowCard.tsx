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
            }} className="tvshow-card h-[500px] flex flex-col rounded-xl p-4 bg-[#0d0620] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.4)] border border-white/10 duration-300 ">

                <img src={`https://image.tmdb.org/t/p/w500${tvShowRes.poster_path}`} alt="poster"
                    className="card-image h-[400px] rounded-xl"
                />

                <div className="p-2">
                    <h2 className="text-[14px] font-bold text-white line-clamp-2">{tvShowRes.name}</h2>
                </div>

                <div className=" flex gap-2 items-center text-sm text-gray-300">
                    <span className="font-semibold flex items-center">⭐ { tvShowRes.vote_average.toFixed(1)}</span> • {tvShowRes.original_language} • {tvShowRes.first_air_date?.split("-")[0]}
                </div>

            </div>

        </div>
    )
}

export default TvShowCard