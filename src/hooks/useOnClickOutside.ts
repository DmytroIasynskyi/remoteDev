import {useEffect} from "react";

function useOnClickOutside(refs: React.RefObject<HTMLElement>[], handler: () => void){

    useEffect(() => {
        function closePopover (e: MouseEvent) {
            if (refs.every(ref => !ref.current?.contains(e.target as Node)) ) { // if click is outside of all refs
                handler();
            }
        }
        document.addEventListener("click", closePopover);
        return () => document.removeEventListener("click", closePopover);

    }, [refs, handler]);
}

export default useOnClickOutside;