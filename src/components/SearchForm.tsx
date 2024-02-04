import {FormEvent} from "react";

export default function SearchForm() {

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