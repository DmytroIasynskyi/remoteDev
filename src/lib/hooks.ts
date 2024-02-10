import {useEffect, useState} from "react";
import {BASE_API_URL} from "./constants.ts";
import {TJobItem, TJobItemDetails} from "./types.ts";

export function useJobItems(searchText: string) {
    const [jobItems, setJobItems] = useState<TJobItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const jobItemsSliced = jobItems.slice(0, 7);

    useEffect( () => {
        if (!searchText) return;
        async function fetchData() {
            setIsLoading(true);
            const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
            const data = await response.json();
            setIsLoading(false);
            setJobItems(data.jobItems);
        }
        fetchData();
    }, [searchText]);

    return {
        jobItemsSliced,
        isLoading
    };
}

export function useActiveJobItem() {
    const [jobItemDetails, setJobItemDetails] = useState<TJobItemDetails | null>(null);
    const [activeId, setActiveId] = useState<number | null>(null);

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

    useEffect(() => {
        if (!activeId) return;
        async function fetchData() {
            const response = await fetch(`${BASE_API_URL}/${activeId}`);
            const data = await response.json();
            setJobItemDetails(data.jobItem);
        }
        fetchData();
    }, [activeId]);

    return jobItemDetails;
}
