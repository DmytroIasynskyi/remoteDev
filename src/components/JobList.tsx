import JobListItem from "./JobListItem.tsx";
import Spinner from "./Spinner.tsx";
import {TJobItem} from "../lib/types.ts";
import {useActiveId} from "../hooks/useActiveId.ts";
import {useJobItemContext} from "../hooks/useJobItemContext.ts";

export function JobList() {
  const activeId = useActiveId();
  const {isLoading, jobItems} = useJobItemContext();
  const jobItemsSliced = jobItems.slice(0, 7);

  return <ul className="job-list">
    {isLoading && <Spinner />}
    {!isLoading && jobItemsSliced.map((jobItem: TJobItem) => (
        <JobListItem jobItem={jobItem} key={jobItem.id} isActive={jobItem.id === activeId}/>
    ))}
  </ul>;
}

export default JobList;
