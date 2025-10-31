import { useEffect } from "react"
import { animateText } from "../.."
import Button from "./Button"
import logo from "/src/assets/images/logo.svg";

function Hero() {
    useEffect(() => {
        animateText(".subtext");
        animateText(".heading");
    }, []);

    return (
        <>
            <section
                className="flex flex-row flex-nowrap items-end h-screen content-start pt-0 px-[16px] md:px-[32px] lg:px-[64px] pb-[64px] md:pb-[120px] relative overflow-visible max-w-[1440px] w-full text-(--primary-text)">
                <div className="bg-[#ff4625] h-[80px] absolute top-[-35px] left-76 w-[500px] blur-[100px] -z-10"></div>
                <div className="bg-[#2558ff] rounded-[999px] flex-none h-[60px] left-[550px] overflow-hidden absolute -z-10 top-[-42px] w-[600px] blur-[100px]"></div>
                {/* <!-- left content --> */}
                <div className="flex items-start justify-center flex-nowrap p-0 overflow-visible relative w-[80%] md:w-min flex-col gap-[8px] z-5">
                    <div className="flex justify-start flex-col shrink-0">
                        <p
                            className="subtext text-xs lg:text-sm font-bold tracking-widest uppercase text-(--token-99439536-6d6e-4d77-be47-ec859ea473e3,rgba(255,255,255,0.4)) font-family">
                            <span className="text-[#ffffffb3]">Senior</span> <span>Fullstack</span> <span className="text-[#ffffffb3]">Web </span><span>Developer</span>
                        </p>
                    </div>

                    <div className="flex justify-start flex-col shrink-0 whitespace-pre">
                        <h1 className="font-bold tracking-2 leading-[1em] heading">
                            <span className="whitespace-nowrap">
                                <span className="text-5xl md:text-9xl">C</span>
                                <span className="text-5xl md:text-9xl">i</span>
                                <span className="text-5xl md:text-9xl">h</span>
                                <span className="text-5xl md:text-9xl">e</span>
                                <span className="text-5xl md:text-9xl">r</span>
                                <span className="text-5xl md:text-9xl">b</span>
                                <span className="text-5xl md:text-9xl">l</span>
                                <span className="text-5xl md:text-9xl">i</span>
                                <span className="text-5xl md:text-9xl">n</span>
                                <span className="text-5xl md:text-9xl">k</span>
                                <span className="text-5xl md:text-9xl">s</span>
                            </span>
                        </h1>
                    </div>

                    <div className="absolute h-[16px] w-[16px] md:h-[32px] md:w-[32px] top-0 right-[-14px] md:right-[-15px] md:top-[50px]">
                        <div className="absolute inset-0">
                            <img src={logo} alt="" className="w-full h-full object-center object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start shrink-0 self-stretch relative h-auto w-full md:w-auto whitespace-pre-wrap wrap-break-word max-w-[520px] lg:max-w-lg">
                        <p className="leading-[1.4em] md:leading-6 text-[#ffffffb3] font-medium text-sm lg:text-base">
                            Call me Blinks a Senior FullStack Web Developer with 4+ years of experience
                            building fintech startups. I specialize in data driven design and a thoughtful,
                            intentional approach that delivers measurable results.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-8">
                        {/* <!-- action button --> */}

                        <Button icon={true} name="Book a call now" />

                        <button
                            className="px-6 py-2 text-base bg-black font-medium rounded-full border border-custom cursor-pointer transition delay-200 duration-500 ease-in-out hover:-translate-y-0.5 hover:bg-button-dark">
                            Explore services
                        </button>
                    </div>
                </div>
                {/* <!-- gradient fade --> */}
                <div
                    className="bg-linear-to-b from-transparent to-black h-[80px] absolute overflow-hidden bottom-0 right-0 z-20 w-full">
                </div>

                <div className="h-[98vh] left-[calc(50%-1216px/2)] overflow-hidden top-0 w-[1216px] absolute">
                    <div className="flex items-center justify-between h-full w-full opacity-[.4]">
                        <div className="bg-white/10 h-full w-px relative overflow-visible"></div>
                        <div className="bg-white/10 h-full w-px relative overflow-visible"></div>
                        <div className="h-full relative w-px overflow-hidden">
                            {/* <!-- line background --> */}
                            <div className="bg-white/10 h-full w-full"></div>

                            {/* <!-- moving flash --> */}
                            <div className="absolute inset-x-0 bottom-0 w-full h-20
                         bg-[linear-gradient(rgba(255,255,255,0)_0%,rgb(255,255,255)_47.3%,rgba(255,255,255,0)_100%)]
                         opacity-[10] animate-flash">
                            </div>
                        </div>
                        <div className="h-full relative w-px overflow-hidden">
                            {/* <!-- line background --> */}
                            <div className="bg-white/10 h-full w-full"></div>

                            {/* <!-- moving flash --> */}
                            <div className="absolute inset-x-0 bottom-0 w-full h-20
                         bg-[linear-gradient(rgba(255,255,255,0)_0%,rgb(255,255,255)_47.3%,rgba(255,255,255,0)_100%)]
                         opacity-[10] animate-flash delay-offset">
                            </div>
                        </div>
                        <div className="bg-white/10 h-full w-px relative overflow-visible"></div>
                        <div className="bg-white/10 h-full w-px relative overflow-visible"></div>
                        <div className="bg-white/10 h-full w-px relative overflow-visible"></div>
                        <div className="bg-white/10 h-full w-px relative overflow-visible"></div>
                    </div>
                </div>
                <div className="h-[80vh] opacity-[.8] md:h-screen overflow-hidden w-full absolute top-0 -right-[112px] md:-right-[302px] lg:-right-[262px]">
                    <div className="absolute inset-0">
                        <img src="/src/assets/images/hero-image.png" alt="Profile" className="block w-full h-full object-center object-cover md:object-contain " />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero