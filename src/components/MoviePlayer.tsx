import { useParams } from "react-router";

const MoviePlayer = () => {
    const { playerId } = useParams()

    const movieUrl = `https://vidsrc-embed.ru/embed/movie/${playerId}`;

    return <div className="w-full h-[calc(100vh-100px)] ">
        <iframe
            className="w-full h-full"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={movieUrl} >

        </iframe>
    </div>

};

export default MoviePlayer;