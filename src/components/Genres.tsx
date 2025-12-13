
import {
    DropdownMenu,
    DropdownMenuContent,
    // DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenresContext } from "@/context/genres.context";
import { useContext } from "react";
import { useNavigate } from "react-router";


const genreList = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]


const Genres = () => {

    const { genres, setGenres, genreName, setGenreName } = useContext(GenresContext);
    //const [genreName, setGenreName] = useState();
    console.log(genres)
    const navigate = useNavigate();
    // console.log(genreName);


    const onChange = (data) => {
        setGenres(data);
        navigate(`/genres/movies`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <h1 className="cursor-pointer text-[#cfc7f5]">  {!genres ? "Genres" : genreName }</h1>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-52 border-none">

                <DropdownMenuRadioGroup value={genres?.toString()} onValueChange={(value) => onChange(Number(value))} className=" text-[#ada2e0] bg-[#2A2445]" >
                    {genreList.map((genre) => (
                        <DropdownMenuRadioItem onClick={()=> setGenreName(genre.name)} value={genre.id.toString()}>
                            {genre.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default Genres;