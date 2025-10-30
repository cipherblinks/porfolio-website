import ProjectList from "../Components/Home/ProjectList"
import Header from "../Components/Home/Header"
import Service from "../Components/Home/Service"
import Works from '../Components/Home/Works'
import Hero from "../Components/Home/Hero"
import Ventures from "../Components/Home/Ventures"
import Testimonials from "../Components/Home/Testimonials"
import Contact from "../Components/Home/Contact"
import Footer from "../Components/Home/Footer"

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <ProjectList />
            <Service />
            <Works />
            <Ventures />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default Home