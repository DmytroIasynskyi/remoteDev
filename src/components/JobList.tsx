import JobListItem from "./JobListItem.tsx";
import Spinner from "./Spinner.tsx";
import {TJobItem} from "../lib/types.ts";
import {useActiveIdContext} from "../hooks/useContext.ts";

export function JobList({isLoading, jobItems}: { isLoading: boolean, jobItems: TJobItem[] }) {
    const  { activeId } = useActiveIdContext();

    return <ul className="job-list">
        {isLoading && <Spinner/>}
        {!isLoading && jobItems.map((jobItem: TJobItem) => (
            <JobListItem jobItem={jobItem} key={jobItem.id} isActive={jobItem.id === activeId}/>
        ))}
    </ul>;
}

export default JobList;
