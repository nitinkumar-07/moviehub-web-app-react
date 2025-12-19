import { createContext, useState } from "react"

interface GenresContextType {
  genres: number | null;
  setGenres: (data: number | null) => void;
  genreName: string | null;
  setGenreName: (name: string | null) => void;
}

const defaultValue: GenresContextType = {
  genres: null,
  setGenres: () => {},
  genreName: null,
  setGenreName: () => {},
};

export const GenresContext = createContext<GenresContextType>(defaultValue);


// export const GenresContext = createContext<{
//     genres: number | null;
//     setGenres: (data : number | null) => void;
//     genreName: string | null;
//     setGenreName: (name: string | null) => void;
// }>({
//     genres:null,
//     setGenres: () => {},
//     genreName: null,
//     setGenreName: () => {}
// })

export const GenresProvider = ({ children }: { children: React.ReactNode }) =>{

    const [genres, setGenres] = useState<number | null>(null);
    const [genreName, setGenreName] = useState<string| null>(null);
    // const value = {genres, setGenres, genreName, setGenreName };

    return (
        <GenresContext.Provider value={{genres, setGenres, genreName, setGenreName }}>{children}</GenresContext.Provider>
    )

}