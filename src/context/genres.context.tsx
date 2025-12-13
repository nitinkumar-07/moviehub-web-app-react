import { createContext, useState } from "react"

export const GenresContext = createContext<{
    genres: number | null;
    setGenres: (data : number) => void;
    genreName: string | null;
   setGenreName: (name: string | null) => void;
}>({
    genres:null,
    setGenres: () => {},
    genreName: null,
    setGenreName: () => {}
})

export const GenresProvider = ({ children }: { children: React.ReactNode }) =>{

    const [genres,setGenres] = useState(null);
    const [genreName, setGenreName] = useState(null);
    const value = {genres, setGenres, genreName, setGenreName };

    return (
        <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
    )

}