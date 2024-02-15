import {createContext, ReactNode, useState} from "react";
import {TJobItem} from "../lib/types.ts";
import {useDebounce} from "../hooks/useDebounce.ts";
import {useJobItems} from "../hooks/useJobitems.ts";

export const JobItemsContext = createContext<{
    isLoading: boolean;
    jobItems: TJobItem[];
    debouncedSearchText: string;
    setSearchText: (searchText: string) => void;
    searchText: string;
} | null>(null);

function JobItemsContextProvider({ children }: {children: ReactNode}) {
    const [searchText, setSearchText] = useState("");
    const debouncedSearchText = useDebounce(searchText, 500);
    const {jobItems, isLoading} = useJobItems(debouncedSearchText);

    return (
        <JobItemsContext.Provider value={{
            searchText,
            debouncedSearchText,
            setSearchText,
            isLoading,
            jobItems
        }}>
            {children}
        </JobItemsContext.Provider>
    )
}

export default JobItemsContextProvider;