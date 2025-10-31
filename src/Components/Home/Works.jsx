import About from "./About"
import WorkFeatures from "./WorksFeatures"
import { scrollAnimateText } from "../.."
import { useEffect } from "react";


function Works() {
    useEffect(() => {
        scrollAnimateText(".about-heading");
        scrollAnimateText(".about-subHeading");
    }, []);

    return (
        <>
            <section className="flex flex-col items-start justify-center gap-[10px] mt-20 text-white w-full px-[16px] md:px-[42px] lg:px-[64px] py-[40px] md:py-[120px] relative overflow-visible max-w-[1440px]">
                {/* shining rounded div */}
                <div className="border-16 border-white bg-black rounded-[999px] w-[240px] h-[240px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px]
                shadow-[0_0_16px_#ffffff80,inset_0_0_32px_1px_#ffffff80] overflow-visible absolute left-60 md:left-225 lg:left-307 lg:top-[172px] md:top-[202px] top-[60px] -z-10">
                    <div className="bg-[#cfdaff] w-[500px] aspect-square overflow-visible absolute opacity-[.2] rounded-[999px] blur-[80px] top-[12px] right-[64px] z-40"></div>
                </div>
                <div className="flex flex-col gap-15 md:gap-20 lg:gap-25 w-full">
                    <div className="flex items-start w-fit justify-center flex-col p-0 relative">
                        <div className="flex gap-3 items-center relative">
                            <p className="text-xs lg:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest about-subHeading">Results delivered</p>
                        </div>
                        <h5 className="text-3xl md:text-7xl lg:text-8xl font-bold leading-8 md:leading-[106px] about-heading">Work</h5>
                    </div>

                    <div className="flex items-center w-full flex-col flex-wrap gap-[16px] relative md:grid md:content-center lg:gap-8 md:auto-rows-fr md:grid-cols-[repeat(2,minmax(50px,1fr))]">
                        <WorkFeatures image='/src/assets/works/work2.png' featured='FEATURED' heading='Real Estate Portfolio Website' paragraph='A sleek Estate portfolio website' />
                        <WorkFeatures image='/src/assets/works/project3.webp' heading='Sales Consulting Agency' paragraph='A sales consulting agencies website' />
                        <WorkFeatures image='/src/assets/works/project1.webp' heading='Modern eCommerce Template' paragraph='A sleek modern eCommerce' />
                        <WorkFeatures image='/src/assets/works/project2.webp' heading='Crypto SaaS Website' paragraph='A exchanges Crypto Platforms' />
                    </div>
                </div>
            </section>
            <About />
        </>
    )
}

export default Works