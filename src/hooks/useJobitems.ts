import {BASE_API_URL} from "../lib/constants.ts";
import {useQuery} from "@tanstack/react-query";
import {TJobItemsApiResponse} from "../lib/types.ts";

export function useJobItems(searchText: string) {
    const { data, isInitialLoading} = useQuery(
        ['job-items', searchText],
        () => fetchJobItems(searchText),
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            enabled: !!searchText,
            retry: false,
            onError: (error) => {
                console.error(error);
            }
        }
    )

    return {
        jobItems: data?.jobItems || [],
        isLoading: isInitialLoading
    } as const;
}

async function fetchJobItems(searchText: string) : Promise<TJobItemsApiResponse> {
    const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
    return await response.json();
}