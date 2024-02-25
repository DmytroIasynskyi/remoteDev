import Background from "./components/Background.tsx";
import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";
import Footer from "./components/Footer.tsx";
import {Toaster} from "react-hot-toast";

function App() {

    return (
        <>
            <Background/>
            <Header/>
            <Container/>
            <Footer/>
            <Toaster position={"top-right"}/>
        </>
    )
}

export default App;
