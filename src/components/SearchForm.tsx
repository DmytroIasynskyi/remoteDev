import {FormEvent} from "react";
import {useJobItemContext} from "../hooks/useJobItemContext.ts";

export default function SearchForm() {
    const {searchText, setSearchText} = useJobItemContext();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form action="#" className="search" onSubmit={handleSubmit}>
            <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <input
                onChange={(event) => setSearchText(event.target.value)}
                value={searchText}
                spellCheck="false"
                type="text"
                required
                placeholder="Find remote developer jobs..."
            />
        </form>
    );
}
