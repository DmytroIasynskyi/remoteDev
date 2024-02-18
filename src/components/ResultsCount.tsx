import {useJobItemContext} from "../hooks/useJobItemContext.ts";

export default function ResultsCount() {
  const {jobItemsCount} = useJobItemContext();

  return <p className="count"><span className="u-bold">{jobItemsCount}</span> results</p>;
}
