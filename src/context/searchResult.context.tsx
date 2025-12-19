import { createContext, useState } from "react";

interface SearchResultContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  searchData: unknown[]; // abhi generic
  setSearchData: (data: unknown[]) => void;
}

export const searchResultContext = createContext<SearchResultContextType | null>(null);;

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {

    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState<unknown[]>([]);

    const value = { searchText, searchData, setSearchText, setSearchData }

    return (
        <searchResultContext.Provider value={value}>{children}</searchResultContext.Provider>
    )

}
