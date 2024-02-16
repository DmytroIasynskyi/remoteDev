import {TJobItemApiResponse} from "../lib/types.ts";
import {BASE_API_URL} from "../lib/constants.ts";
import {useQuery} from "@tanstack/react-query";
import {handleError} from "../lib/utils.ts";

export function useActiveJobItem(id: number | null) {
    const {data, isInitialLoading} = useQuery( // кешує попередньо обрані айтеми у списку, щоб не робити зайві запити на сервер
        ["job-item", id],
        () => (id ? fetchJobItem(id) : null),
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: !!id
        }
    )

    return {
        jobItemDetails: data?.jobItem,
        isLoading: isInitialLoading
    } as const;
}

async function fetchJobItem (id: number) : Promise<TJobItemApiResponse> {
    try {
        const response = await fetch(`${BASE_API_URL}/${id}`);
        const data = await response.json();
        if (!response.ok) {
            handleError(data.message);
        }
        return data;
    } catch (error) {
        handleError(error);
        throw error;
    }
}