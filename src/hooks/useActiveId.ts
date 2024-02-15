import {useEffect, useState} from "react";

export function useActiveId() {
    const [activeId, setActiveId] = useState<number | null>(null);

    // get activeID from URL hash
    useEffect(() => {
        function handleHashChange() {
            const id = +window.location.hash.slice(1);
            if (!id) return;
            setActiveId(id);
        }

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        }
    }, []);

    return activeId;
}