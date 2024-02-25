import {useJobItemContext} from "../hooks/useContext.ts";

export default function ResultsCount() {
  const {jobItemsCount} = useJobItemContext();

  return <p className="count"><span className="u-bold">{jobItemsCount}</span> results</p>;
}
