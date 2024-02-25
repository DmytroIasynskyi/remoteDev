import {createContext, ReactNode, useEffect, useState} from "react";

export const ActiveIdContext = createContext<{
  activeId: number | null
} | null>(null);

function ActiveIdContextProvider({ children }: {children: ReactNode}) {
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

    return (
        <ActiveIdContext.Provider value={{
           activeId
        }}>
            {children}
        </ActiveIdContext.Provider>
    );
}

export default ActiveIdContextProvider;