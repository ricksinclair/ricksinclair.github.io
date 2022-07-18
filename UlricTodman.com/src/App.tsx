import './App.css'
import {useEffect, useState} from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import QRCode from "./assets/QRCODE.png";
import camera from "./assets/camera.png"

function App() {

    const [share, setShare] = useState(false)

    useEffect(() => {
        document.title = "UlricTodman.com"
    }, [])

    const shareToggleHandler = () => {
        setShare((share) => !share);
    }
    return (
        <div className="App" id="application">
            <div></div>
            <BusinessCard defaultValues/>
            <div className="btn" onClick={shareToggleHandler}><img src={camera} width="15px" alt="camera icon"/><p>SCAN
                THIS BUSINESS CARD</p></div>


            {share ? <>
                <img src={QRCode} width="317" className="qr" height="auto" alt="QR Code"/></> : null
            }
            <div className="small-text">

                <small>made with react.js and vite</small>
                <small>&copy; 2022 Ulric Todman</small>
            </div>

        </div>

    )
}

export default App
