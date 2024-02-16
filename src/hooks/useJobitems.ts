import {BASE_API_URL} from "../lib/constants.ts";
import {useQuery} from "@tanstack/react-query";
import {TJobItemsApiResponse} from "../lib/types.ts";
import {handleError} from "../lib/utils.ts";

export function useJobItems(searchText: string) {
    const {data, isInitialLoading} = useQuery( // кешує попередньо обрані айтеми у списку, щоб не робити зайві запити на сервер
        ['job-items', searchText],
        () => fetchJobItems(searchText),
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            enabled: !!searchText,
            retry: false
        }
    )

    return {
        jobItems: data?.jobItems || [],
        isLoading: isInitialLoading
    } as const;
}

async function fetchJobItems(searchText: string): Promise<TJobItemsApiResponse>  {
    try {
        const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
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