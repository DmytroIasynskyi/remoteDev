import ResultsCount from "./ResultsCount.tsx";
import SortingControls from "./SortingControls.tsx";
import JobList from "./JobList.tsx";
import PaginationControls from "./PaginationControls.tsx";
import {RESULTS_PER_PAGE} from "../lib/constants.ts";
import {useJobItemContext} from "../hooks/useContext.ts";
import {useMemo} from "react";

export default function Sidebar() {
    const {isLoading, jobItemsSorted, currentPage} = useJobItemContext();

    const jobItemsPerPage = useMemo(() => ( // useMemo is used to avoid unnecessary re-renders
        jobItemsSorted.slice(currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE)
    ), [currentPage, jobItemsSorted]);

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
