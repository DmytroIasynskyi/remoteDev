import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons";
import {RESULTS_PER_PAGE} from "../lib/constants.ts";
import {TPageDirection} from "../lib/types.ts";
import {useJobItemContext} from "../hooks/useContext.ts";

export default function PaginationControls() {
    const {currentPage, setCurrentPage, jobItemsCount} = useJobItemContext();
    const lastPageNumber = Math.ceil(jobItemsCount / RESULTS_PER_PAGE); // Додав заокруглення вгору для коректного визначення останньої сторінки

    function handlePageChange(direction: TPageDirection, e: React.MouseEvent<HTMLButtonElement>) {
        e.currentTarget.blur(); // Виклик методу blur() для поточного елемента, знімає фокус з кнопки після кліку
        if (direction === "next") setCurrentPage(currentPage + 1);
        if (direction === "prev") setCurrentPage(currentPage - 1);
    }

    return <section className="pagination">
        {currentPage > 1 &&
            <button
                onClick={(e) => handlePageChange("prev", e)}
                className={"pagination__button pagination__button--back"}
            >
                <ArrowLeftIcon/>
                Page {currentPage - 1}
            </button>
        }
        {currentPage < lastPageNumber &&
            <button
                onClick={(e) => handlePageChange("next", e)}
                className={"pagination__button pagination__button--next"}
            >
                Page {currentPage + 1}
                <ArrowRightIcon/>
            </button>
        }
    </section>;
}