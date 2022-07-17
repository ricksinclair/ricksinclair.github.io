import './App.css'
import {useEffect} from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import QRCode from "./assets/QRCODE.png"

function App() {

    useEffect(() => {
        document.title = "UlricTodman.com"
    }, [])





    return (
        <div className="App" id="application">
            <BusinessCard  defaultValues/>
            <div className="small-text">
                <img src={QRCode} width = "317" className="qr" height="auto" alt="QR Code"/>
                <small>made with react.js and vite</small>
                <small>&copy; 2022 Ulric Todman</small>
            </div>

        </div>

    )
}

export default App
