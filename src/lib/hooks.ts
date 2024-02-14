import {useContext, useEffect, useState} from "react";
import {BASE_API_URL} from "./constants.ts";
import {JobItemsContext} from "../contexts/JobItemsContextProvider.tsx";
import {TJobItemDetails} from "./types.ts";


export function useActiveJobItem(id: number | null) {
    const [jobItemDetails, setJobItemDetails] = useState<TJobItemDetails | null>(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (!id) return;

        async function fetchData() {
            setIsLoading(true);
            const response = await fetch(`${BASE_API_URL}/${id}`);
            const data = await response.json();
            setIsLoading(false);
            setJobItemDetails(data.jobItem);
        }

        fetchData();
    }, [id]);

    return {jobItemDetails, isLoading}
}

export function useActiveId() {
    const [activeId, setActiveId] = useState<number | null>(null);

    // get activeID from URL hash
    useEffect(() => {
        function handleHashChange() {
            const id = +window.location.hash.slice(1);
            if (!id) return;
            setActiveId(id);
        }

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        }
    }, []);

    return activeId;
}

export function useJobItemContext() {
    const context = useContext(JobItemsContext);
    if (!context) {
        throw new Error(
            "useJobItemContext must be used within a JobItemsProvider"
        );
    }
    return context;
}

export function useDebounce<T>(value: T, delay = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}
