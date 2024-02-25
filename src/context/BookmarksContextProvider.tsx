import {createContext, ReactNode} from "react";
import useLocalStorage from "../hooks/useLocalStorage.ts";
import useJobItems from "../hooks/useJobItems.ts";
import {TJobItemDetails} from "../lib/types.ts";

export const BookmarksContext = createContext<{
    bookmarkedIds: number[];
    handleToggleBookmark: (id: number) => void;
    bookmarkedJobItems: TJobItemDetails[];
    isLoading: boolean;
} | null>(null);

function BookmarksContextProvider({ children }: {children: ReactNode}) {
    const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>("bookmarkedIds", []);
    const {jobItems: bookmarkedJobItems, isLoading} = useJobItems(bookmarkedIds);

    function handleToggleBookmark(id: number) {
        if (bookmarkedIds.includes(id)) {
            setBookmarkedIds(prev => prev.filter(bookmarkedId => bookmarkedId !== id));
        } else {
            setBookmarkedIds(prev => [...prev, id]);
        }
    }

  return (
        <BookmarksContext.Provider value={{
            bookmarkedIds,
            handleToggleBookmark,
            bookmarkedJobItems,
            isLoading
        }}>
            {children}
        </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;