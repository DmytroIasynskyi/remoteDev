import Background from "./components/Background.tsx";
import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";
import Footer from "./components/Footer.tsx";
import JobItemsContextProvider from "./contexts/JobItemsContextProvider.tsx";

function App() {

    return (
        <>
            <Background/>
            <JobItemsContextProvider>
                <Header/>
                <Container/>
            </JobItemsContextProvider>
            <Footer/>
        </>
    )
}

export default App;
