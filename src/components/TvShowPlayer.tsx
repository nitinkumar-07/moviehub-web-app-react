import { useParams } from "react-router"

const TvShowPlayer = () => {

    const { playerIdd } = useParams();

    const TvshowUrl = `https://vidsrc-embed.ru/embed/tv/${playerIdd}`

    return <div className="w-full h-[calc(100vh-100px)] " >
        <iframe
            src={TvshowUrl}
            className="w-full h-screen"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>

}

export default TvShowPlayer