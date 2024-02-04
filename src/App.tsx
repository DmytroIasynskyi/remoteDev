import Background from "./components/Background.tsx";
import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";
import Footer from "./components/Footer.tsx";
import {useEffect, useState} from "react";
import {BASE_API_URL} from "./lib/constants.ts";

function App() {
    const [jobItems, setJobItems] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect( () => {
        if (!searchText) return;

        async function fetchData() {
            const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
            const data = await response.json();
            setJobItems(data.jobItems);
        }

        fetchData();
    }, [searchText]);

    return (
        <>
            <Background/>
            <Header/>
            <Container/>
            <Footer/>
        </>);
}

export default App;
