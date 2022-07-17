import './App.css'
import {useEffect} from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";

function App() {

    useEffect(() => {
        document.title = "UlricTodman.com"
    }, [])





    return (
        <div className="App" id="application">
            <BusinessCard  defaultValues/>

        </div>

    )
}

export default App
