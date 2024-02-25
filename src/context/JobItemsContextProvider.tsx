import {createContext, ReactNode, useState} from "react";
import {TJobItem, TSortBy} from "../lib/types.ts";
import {useSearchQuery} from "../hooks/useSearchQuery.ts";
import {useSearchTextContext} from "../hooks/useContext.ts";

export const JobItemsContext = createContext<{
    isLoading: boolean;
    jobItemsSorted: TJobItem[];
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
    jobItemsCount: number;
    sortBy: TSortBy;
    setSortBy: (sortBy: TSortBy) => void;
    handleSortBy: (event: React.MouseEvent<HTMLButtonElement>) => void;
    jobItems: TJobItem[];
} | null>(null);

function JobItemsContextProvider({ children }: {children: ReactNode}) {

    const {debouncedSearchText} = useSearchTextContext();
    const {jobItems, isLoading} = useSearchQuery(debouncedSearchText);
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
            isLoading,
            jobItemsSorted,
            currentPage,
            setCurrentPage,
            jobItemsCount,
            sortBy,
            setSortBy,
            handleSortBy,
            jobItems
        }}>
            {children}
        </JobItemsContext.Provider>
    )
}

export default JobItemsContextProvider;