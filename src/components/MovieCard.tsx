import type { MovieResult } from "@/hooks/useMovies"
import "../App.css";
import { useNavigate } from "react-router";

interface props {
    movieRes: MovieResult 
} 

const MovieCard = ({ movieRes }: props) => {
    const navigate = useNavigate();
    
    return (
        
        <div>
            <div onClick={() => {
                navigate(`/player/${movieRes.id}`)
            }} className="movie-card h-[500px] flex flex-col bg-[#0d0620] p-4 rounded-xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.4)] border border-white/10 duration-300 ">

            <img src={`https://image.tmdb.org/t/p/w500${movieRes.poster_path}`} alt="poster"
                className="card-image h-[400px] rounded-xl "
            />

            <div className="movie-desc p-2">
                <h2 className="movietitle text-[14px] font-bold text-white line-clamp-2">
                    {movieRes.title}
                </h2>

                <div className=" flex items-center gap-2 text-sm text-gray-300 mt-2">
                   <span className="font-bold flex items-center" >⭐ {movieRes?.vote_average?.toFixed(1)}</span> • {movieRes.original_language} • {movieRes.release_date.split("-")[0]}
                </div>
            </div>

        </div>
        </div>
    );
}

export default MovieCard