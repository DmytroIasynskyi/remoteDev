import {createContext, ReactNode, useEffect, useState} from "react";
import {TJobItem} from "../lib/types.ts";
import {BASE_API_URL} from "../lib/constants.ts";
import {useDebounce} from "../lib/hooks.ts";

export const JobItemsContext = createContext<{
    isLoading: boolean;
    jobItems: TJobItem[];
    jobItemsSliced: TJobItem[];
    jobItemsCount: number;
    debouncedSearchText: string;
    setSearchText: (searchText: string) => void;
} | null>(null);

function JobItemsContextProvider({ children }: {children: ReactNode}) {
    const [searchText, setSearchText] = useState("");
    const [jobItems, setJobItems] = useState<TJobItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const jobItemsSliced = jobItems.slice(0, 7);
    const jobItemsCount = jobItems.length;
    const debouncedSearchText = useDebounce(searchText, 500);

    useEffect(() => {
        if (!debouncedSearchText) return;
        async function fetchData() {
            setIsLoading(true);
            const response = await fetch(`${BASE_API_URL}?search=${debouncedSearchText}`);
            const data = await response.json();
            setIsLoading(false);
            setJobItems(data.jobItems);
        }

        fetchData();
    }, [debouncedSearchText]);


    return (
        <JobItemsContext.Provider value={{
            debouncedSearchText,
            setSearchText,
            isLoading,
            jobItems,
            jobItemsSliced,
            jobItemsCount
        }}>
            {children}
        </JobItemsContext.Provider>
    )
}

export default JobItemsContextProvider;