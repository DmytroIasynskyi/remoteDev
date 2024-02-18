import {useJobItemContext} from "../hooks/useJobItemContext.ts";

export default function SortingControls() {
    const {sortBy, handleSortBy} = useJobItemContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button className={`sorting__button sorting__button--relevant ${sortBy === 'relevant' && 'sorting__button--active'}`} onClick={handleSortBy} >
        Relevant
      </button>

      <button className={`sorting__button sorting__button--recent ${sortBy === 'recent' && 'sorting__button--active'}`} onClick={handleSortBy}>
        Recent
      </button>
    </section>
  );
}
