import {FormEvent} from "react";
import { useSearchTextContext} from "../hooks/useContext.ts";

export default function SearchForm() {
    const {searchText, setSearchText} = useSearchTextContext();

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
