import { Navbar } from "../Components/Navbar"
import { ViewCards } from "./ViewCards"

export const Home = () => {

    return(
        <>
            <Navbar />
            <div className="container mt-5">

                <ViewCards />
            </div>
        </>
    )
}