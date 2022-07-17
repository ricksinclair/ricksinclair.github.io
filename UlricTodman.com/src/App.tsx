import './App.css'
import {useEffect} from "react";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import BusinessCardProps from "./components/BusinessCard/BusinessCardProps";

function App() {

    useEffect(() => {
        document.title = "UlricTodman.com"
    }, [])


    let murrayProps: BusinessCardProps = {
        name: "Lt. Commander Cuckleburry",
        portraitSrc: "http://www.fillmurray.com/300/300",
        interests: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda aut culpa cum deserunt earum enim expedita facere facilis incidunt inventore ipsa ipsam, laborum maiores minus modi molestias neque provident quia quisquam quo quos, tempora temporibus veniam, vero vitae voluptate. Atque autem delectus deleniti ducimus eaque eius magnam omnis optio provident soluta. A ab architecto autem beatae blanditiis consectetur culpa, dolor dolore, eaque fuga id illum impedit in iusto laudantium magnam minus natus nemo nobis nulla odio officiis optio pariatur quod rerum soluta veritatis voluptas? A autem eos molestias odit quidem vitae. Ad aperiam at earum iste molestiae quia, soluta?",
        emailPrimary: true,
        instagram: "https://www.instagram.com/p/CbqVvduhnBa  ",
        urlViewName: "FillMurray.com",
        url: "http://www.fillmurray.com",
        twitter: "https://twitter.com/bmurraystories?lang=en",
        profession: "Mythical man and urban legend "


    }


    return (
        <div className="App" id="application">
            <BusinessCard  defaultValues/>
            <BusinessCard
                {...murrayProps}

            />
        </div>

    )
}

export default App
