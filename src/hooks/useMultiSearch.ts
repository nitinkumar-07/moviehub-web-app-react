import { searchResultContext } from "@/context/searchResult.context";
import apiClient from "@/services/api-client"
import { useContext, useEffect } from "react";

const useMultiSearch = (input: string) => {

    const context = useContext(searchResultContext);

    if (!context) {
        throw new Error("useMultiSearch must be used inside SearchProvider");
    }

    const { setSearchData } = context;

    const fetchSearch = async () => {
        const res = await apiClient.get("/search/multi", {
            params: {
                query: input,
            }
        });
        setSearchData(res.data.results);
    };

    useEffect(() => {
        fetchSearch();
    }, [input])

};

export default useMultiSearch;