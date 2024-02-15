import {useContext, useEffect, useState} from "react";
import {BASE_API_URL} from "./constants.ts";
import {JobItemsContext} from "../contexts/JobItemsContextProvider.tsx";
import {useQuery} from "@tanstack/react-query";

export function useActiveJobItem(id: number | null) {
    const {data, isLoading} = useQuery( // кешує попередньо обрані айтеми у списку, щоб не робити зайві запити на сервер
        ["job-item", id],
        async () => {
            if (!id) return;
            const response = await fetch(`${BASE_API_URL}/${id}`);
            return await response.json();
        },
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: !!id
        }
    )

    const jobItemDetails  = data?.jobItem;
    return {jobItemDetails, isLoading};
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
