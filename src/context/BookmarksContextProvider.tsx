import {createContext, ReactNode, useState} from "react";

export const BookmarksContext = createContext<{
    bookmarkedIds: number[];
    handleToggleBookmark: (id: number) => void;
} | null>(null);

function BookmarksContextProvider({ children }: {children: ReactNode}) {
    const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

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