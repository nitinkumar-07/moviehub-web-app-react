import useMovieList from "@/hooks/useMovies"
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { GenresContext } from "@/context/genres.context";
// import { useEffect } from "react";

const MovieList = () => {

    const { genres, genreName } = useContext(GenresContext);
    const { movieLists } = useMovieList(genres);
    //console.log(movieLists)

    // useEffect(() => {
    //     setGenres(null);
    //     setGenreName(null);
    // }, []);

    return <div className="w-full max-w-[1450px] p-2 mx-auto">
        <h1 className="text-2xl font-semibold p-3 py-2 text-[#cfc7f5]"> {genreName ? genreName : "Movies"}</h1>
        <div className="movielist grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {movieLists?.map((movie) => (
                <div key={movie.id}>
                    <MovieCard movieRes={movie} />
                </div>
            ))}
        </div>
    </div>



}

export default MovieList