import {useQueries} from "@tanstack/react-query";
import {fetchJobItem} from "./useActiveJobItem.ts";
import {TJobItemDetails} from "../lib/types.ts";

function useJobItems(ids: number[]) {
    const results = useQueries({
        queries: ids.map(id => ({
            queryKey: ["job-item", id],
            queryFn: () => fetchJobItem(id),
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: !!id
        })),
    })

    const jobItems = results
        .map(result => result.data?.jobItem)
        .filter(Boolean) as TJobItemDetails[];

    const isLoading = results.some(result => result.isLoading);

    return {
        jobItems,
        isLoading
    };

}

export default useJobItems;