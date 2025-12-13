import { createContext, useState } from "react";

export const searchResultContext = createContext({});

export const SearchProvider = ({children} : {children : React.ReactNode}) =>{

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState();

    const value = {searchText, searchData , setSearchText, setSearchData}

    return(
        <searchResultContext.Provider value={value}>{children}</searchResultContext.Provider>
    )
}
