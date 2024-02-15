import {TJobItemApiResponse} from "../lib/types.ts";
import {BASE_API_URL} from "../lib/constants.ts";
import {useQuery} from "@tanstack/react-query";

export function useActiveJobItem(id: number | null) {
    const {data, isInitialLoading} = useQuery( // кешує попередньо обрані айтеми у списку, щоб не робити зайві запити на сервер
        ["job-item", id],
        () => (id ? fetchJobItem(id) : null),
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: !!id,
            onError: (error) => {
                console.error(error);
            }
        }
    )

    return {
        jobItemDetails: data?.jobItem,
        isLoading: isInitialLoading
    } as const;
}

async function fetchJobItem (id: number) : Promise<TJobItemApiResponse> {
    const response = await fetch(`${BASE_API_URL}/${id}`);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
    return await response.json();
}