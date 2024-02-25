import {TriangleDownIcon} from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover.tsx";
import useOnClickOutside from "../hooks/useOnClickOutside.ts";
import {useRef, useState} from "react";

export default function BookmarksButton() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false)); // close popover when clicking outside

    return (
        <section>
            <button ref={buttonRef} className="bookmarks-btn" onClick={() => setIsOpen(prev => !prev)}>
                Bookmarks <TriangleDownIcon/>
            </button>
            {isOpen && <BookmarksPopover ref={popoverRef}/>}
        </section>
    );
}
