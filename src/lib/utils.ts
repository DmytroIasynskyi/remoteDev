import toast from "react-hot-toast";

export function handleError(error: unknown) {
    let errorMessage;
    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "An error occurred!";
    }
    toast.error("ERROR! " + errorMessage, {duration: 3000});
}