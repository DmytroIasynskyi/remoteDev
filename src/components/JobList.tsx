import JobListItem from "./JobListItem.tsx";
import Spinner from "./Spinner.tsx";
import {TJobItem} from "../lib/types.ts";
import {useActiveId} from "../hooks/useActiveId.ts";
import {useJobItemContext} from "../hooks/useJobItemContext.ts";
import {RESULTS_PER_PAGE} from "../lib/constants.ts";

export function JobList() {
  const activeId = useActiveId();
  const {isLoading, jobItemsSorted, currentPage} = useJobItemContext();
  const jobItemsPerPage = jobItemsSorted.slice(currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);

  return <ul className="job-list">
    {isLoading && <Spinner />}
    {!isLoading && jobItemsPerPage.map((jobItem: TJobItem) => (
        <JobListItem jobItem={jobItem} key={jobItem.id} isActive={jobItem.id === activeId}/>
    ))}
  </ul>;
}

export default JobList;
