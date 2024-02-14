import BookmarkIcon from "./BookmarkIcon";
import {TJobItem} from "../lib/types.ts";

type TJobListItemProps = {
  jobItem: TJobItem;
  isActive: boolean;
}

export default function JobListItem({ jobItem, isActive }: TJobListItemProps) {
  const { title, company, daysAgo, badgeLetters } = jobItem;

  return (
    <li className={`job-item ${isActive && 'job-item--active'}` }>
      <a href={`#${jobItem.id}`} className="job-item__link">
        <div className="job-item__badge">{badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{title}</h3>
          <p className="job-item__company">{company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
