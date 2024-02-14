import JobListItem from "./JobListItem.tsx";
import Spinner from "./Spinner.tsx";
import {useActiveId, useJobItemContext} from "../lib/hooks.ts";
import {TJobItem} from "../lib/types.ts";

export function JobList() {
  const activeId = useActiveId();
  const {isLoading, jobItemsSliced} = useJobItemContext();

  return <ul className="job-list">
    {isLoading && <Spinner />}
    {!isLoading && jobItemsSliced.map((jobItem: TJobItem) => (
        <JobListItem jobItem={jobItem} key={jobItem.id} isActive={jobItem.id === activeId}/>
    ))}
  </ul>;
}

export default JobList;
