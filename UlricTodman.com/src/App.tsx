import './App.css'
import {useEffect} from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import Construction from "./assets/undraw_building_blocks_re_5ahy.svg"

function App() {


    useEffect(() => {
        document.title = "UlricTodman.com"
    }, [])


    return (
        <div className="App" id="application">
            <div className={`top-container`}>
                <div className={`left-container `}>
                    <BusinessCard defaultValues/>


                </div>

                <div className="right-container">
                    <div className={`right-side-mod-1`}>
                        <h1 className={`right-side-heading`}>Well, Hello there! 👋🏾</h1>
                        <p className="right-side-copy">
                            First thing's first. Thanks for stopping by. This place is still under construction but feel
                            free to connect.
                        </p>
                        <div className="under-construction-container">
                            <img src={Construction} alt="under-construction " className={`under-construction-img`}
                                 height={`300px`} width={`300px`}/>

                        </div>
                    </div>
                    <div className={`right-side-mod-2`}></div>

                </div>
            </div>

            <div className="bottom-container">
                <div className="small-text">

                    <small>made with react.js and vite</small>
                    <small>&copy; 2022 Ulric Todman</small>
                </div>
            </div>


        </div>

    )

}
export default App
