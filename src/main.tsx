import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import JobItemsContextProvider from "./context/JobItemsContextProvider.tsx";
import BookmarksContextProvider from "./context/BookmarksContextProvider.tsx";
import ActiveIdContextProvider from "./context/ActiveIdContextProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <JobItemsContextProvider>
                <BookmarksContextProvider>
                    <ActiveIdContextProvider>
                        <App/>
                    </ActiveIdContextProvider>
                </BookmarksContextProvider>
            </JobItemsContextProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
