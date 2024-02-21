import Background from "./components/Background.tsx";
import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";
import Footer from "./components/Footer.tsx";
import JobItemsContextProvider from "./context/JobItemsContextProvider.tsx";
import {Toaster} from "react-hot-toast";
import BookmarksContextProvider from "./context/BookmarksContextProvider.tsx";

function App() {

    return (
        <>
            <Background/>
            <JobItemsContextProvider>
                <BookmarksContextProvider>
                    <Header/>
                    <Container/>
                </BookmarksContextProvider>
            </JobItemsContextProvider>
            <Footer/>
            <Toaster position={"top-right"}/>
        </>
    )
}

export default App;
