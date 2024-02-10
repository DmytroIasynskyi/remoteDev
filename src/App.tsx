import Background from "./components/Background.tsx";
import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {useJobItems} from "./lib/hooks.ts";

function App() {
    const [searchText, setSearchText] = useState("");
    const {jobItemsSliced, isLoading} = useJobItems(searchText);


    return (
        <>
            <Background/>
            <Header/>
            <Container/>
            <Footer/>
        </>);
}

export default App;
