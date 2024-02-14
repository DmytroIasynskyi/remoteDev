import {useJobItemContext} from "../lib/hooks.ts";

export default function ResultsCount() {
  const {jobItemsCount} = useJobItemContext();

  return <p className="count"><span className="u-bold">{jobItemsCount}</span> results</p>;
}
