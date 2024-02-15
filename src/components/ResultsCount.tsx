import {useJobItemContext} from "../hooks/useJobItemContext.ts";

export default function ResultsCount() {
  const {jobItems} = useJobItemContext();
  const jobItemsCount = jobItems.length;

  return <p className="count"><span className="u-bold">{jobItemsCount}</span> results</p>;
}
