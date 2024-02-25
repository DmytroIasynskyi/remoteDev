import {createContext, ReactNode, useState} from "react";
import {useDebounce} from "../hooks/useDebounce.ts";

export const SearchTextContext = createContext<{
    searchText: string,
    setSearchText: (text: string) => void,
    debouncedSearchText: string
} | null>(null);

function SearchTextContextProvider({children}: { children: ReactNode }) {
    const [searchText, setSearchText] = useState("");
    const debouncedSearchText = useDebounce(searchText, 500);


    return (
        <SearchTextContext.Provider value={{
            searchText,
            setSearchText,
            debouncedSearchText
        }}>
            {children}
        </SearchTextContext.Provider>
    );
}

export default SearchTextContextProvider;