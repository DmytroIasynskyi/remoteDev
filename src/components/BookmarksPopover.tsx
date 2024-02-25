import {useBookmarksContext} from "../hooks/useBookmsrksContext.ts";
import JobList from "./JobList.tsx";

export default function BookmarksPopover() {
  const { bookmarkedJobItems, isLoading} = useBookmarksContext();

  return <div className="bookmarks-popover">
    <JobList isLoading={isLoading} jobItems={bookmarkedJobItems} />
  </div>
;
}
