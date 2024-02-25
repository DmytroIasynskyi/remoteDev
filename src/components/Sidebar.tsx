import ResultsCount from "./ResultsCount.tsx";
import SortingControls from "./SortingControls.tsx";
import JobList from "./JobList.tsx";
import PaginationControls from "./PaginationControls.tsx";
import {useJobItemContext} from "../hooks/useJobItemContext.ts";
import {RESULTS_PER_PAGE} from "../lib/constants.ts";

export default function Sidebar() {
    const {isLoading, jobItemsSorted, currentPage} = useJobItemContext();
    const jobItemsPerPage = jobItemsSorted.slice(currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <ResultsCount/>
                <SortingControls/>
            </div>
            <JobList isLoading={isLoading} jobItems={jobItemsPerPage} />
            <PaginationControls/>
        </div>
    );
}
