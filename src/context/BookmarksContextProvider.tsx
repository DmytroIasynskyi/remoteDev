import {createContext, ReactNode} from "react";
import useLocalStorage from "../hooks/useLocalStorage.ts";

export const BookmarksContext = createContext<{
    bookmarkedIds: number[];
    handleToggleBookmark: (id: number) => void;
} | null>(null);

function BookmarksContextProvider({ children }: {children: ReactNode}) {
    const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>("bookmarkedIds", []);

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
            handleToggleBookmark
        }}>
            {children}
        </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;