import {useBookmarksContext} from "../hooks/useBookmsrksContext.ts";
import JobList from "./JobList.tsx";
import {forwardRef} from "react";
import {createPortal} from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>(function(_, ref) { //props is first argument, second is ref
        const { bookmarkedJobItems, isLoading} = useBookmarksContext();

        return createPortal( // createPortal is a function that takes two arguments, the first is the JSX to render, the second is the DOM element to render it to
            <div ref={ref} className="bookmarks-popover">
          <JobList isLoading={isLoading} jobItems={bookmarkedJobItems} />
        </div>, document.body
        );
    }
)

export default BookmarksPopover;
