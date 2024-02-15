import {useContext} from "react";
import {JobItemsContext} from "../context/JobItemsContextProvider.tsx";

export function useJobItemContext() {
    const context = useContext(JobItemsContext);
    if (!context) {
        throw new Error(
            "useJobItemContext must be used within a JobItemsProvider"
        );
    }
    return context;
}