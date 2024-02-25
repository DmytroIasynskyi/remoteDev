import {BookmarkFilledIcon} from "@radix-ui/react-icons";
import {useBookmarksContext} from "../hooks/useBookmsrksContext.ts";

export default function BookmarkIcon({id}: { id: number }) {
    const {handleToggleBookmark, bookmarkedIds} = useBookmarksContext();

    return (
        <button className="bookmark-btn">
            <BookmarkFilledIcon
                className={`${bookmarkedIds.includes(id) && 'filled'}`}
                onClick={(e) => {
                    e.preventDefault();
                    handleToggleBookmark(id);
                }}
            />
        </button>
    );
}
