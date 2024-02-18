import {createContext, ReactNode, useState} from "react";
import {TJobItem, TSortBy} from "../lib/types.ts";
import {useDebounce} from "../hooks/useDebounce.ts";
import {useJobItems} from "../hooks/useJobitems.ts";

export const JobItemsContext = createContext<{
    isLoading: boolean;
    jobItemsSorted: TJobItem[];
    debouncedSearchText: string;
    setSearchText: (searchText: string) => void;
    searchText: string;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    jobItemsCount: number;
    sortBy: TSortBy;
    setSortBy: (sortBy: TSortBy) => void;
    handleSortBy: (event: React.MouseEvent<HTMLButtonElement>) => void;
} | null>(null);

function JobItemsContextProvider({ children }: {children: ReactNode}) {
    const [searchText, setSearchText] = useState("");
    const debouncedSearchText = useDebounce(searchText, 500);
    const {jobItems, isLoading} = useJobItems(debouncedSearchText);
    const [currentPage, setCurrentPage ] = useState(1);
    const jobItemsCount = jobItems.length || 0;
    const [sortBy, setSortBy] = useState<TSortBy>("relevant");
    const jobItemsSorted = [...jobItems].sort((a, b) => { // sort is a mutable method, so we need to create a new array
        if (sortBy === "relevant") {
            return b.relevanceScore - a.relevanceScore;
        } else {
            return a.daysAgo - b.daysAgo;
        }
    });

    function handleSortBy(event: React.MouseEvent<HTMLButtonElement>) {
        const btnText = event.currentTarget.innerText.toLowerCase().trim();
        if (btnText === "relevant") setSortBy("relevant");
        if (btnText === "recent") setSortBy("recent");
        setCurrentPage(1);
    }

    return (
        <JobItemsContext.Provider value={{
            searchText,
            debouncedSearchText,
            setSearchText,
            isLoading,
            jobItemsSorted,
            currentPage,
            setCurrentPage,
            jobItemsCount,
            sortBy,
            setSortBy,
            handleSortBy
        }}>
            {children}
        </JobItemsContext.Provider>
    )
}

export default JobItemsContextProvider;