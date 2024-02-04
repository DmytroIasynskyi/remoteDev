import JobListItem from "./JobListItem.tsx";

export function JobList() {
  return <ul className="job-list">
    {jobItems.map((jobItem) => (
        <JobListItem jobItem={jobItem} key={jobItem.id}/>
    ))}
  </ul>;
}

export default JobList;
