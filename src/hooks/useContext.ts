import {useContext} from "react";
import {ActiveIdContext} from "../context/ActiveIdContextProvider.tsx";
import {BookmarksContext} from "../context/BookmarksContextProvider.tsx";
import {JobItemsContext} from "../context/JobItemsContextProvider.tsx";
import {SearchTextContext} from "../context/SearchTextContextProvider.tsx";

export function useActiveIdContext() {
    const context = useContext(ActiveIdContext);
    if (!context) {
        throw new Error(
            "useActiveIdContext must be used within a ActiveIdContextProvider"
        );
    }
    return context;
}

export function useBookmarksContext() {
    const context = useContext(BookmarksContext);
    if (!context) {
        throw new Error(
            "useBookmarksContext must be used within a BookmarksProvider"
        );
    }
    return context;
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

export function useSearchTextContext() {
    const context = useContext(SearchTextContext);
    if (!context) {
        throw new Error(
            "useSearchTextContext must be used within a SearchTextProvider"
        );
    }
    return context;
}