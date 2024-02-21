import {useContext} from "react";
import {BookmarksContext} from "../context/BookmarksContextProvider.tsx";

export function useBookmarksContext() {
    const context = useContext(BookmarksContext);
    if (!context) {
        throw new Error(
            "useBookmarksContext must be used within a BookmarksProvider"
        );
    }
    return context;
}