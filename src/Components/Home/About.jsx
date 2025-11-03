import { useEffect } from "react";
import { slideUpOnScroll } from "../..";
import Button from "./Button"
import aboutImage from "/src/assets/images/my.jpg"
import logoIcon from "/src/assets/images/logo.svg";

function About() {
    useEffect(() => {
        const triggers = slideUpOnScroll(".service-section", {
            startY: 60,
            start: "top 95%",
            end: "top 40%",
            scrub: 0.7,
            markers: false,
        });

        return () => {
            // cleanup on unmount
            triggers.forEach(t => t.kill && t.kill());
        };
    }, []);

    return (
        <>
            <section className="flex items-start justify-center overflow-visible gap-[10px] text-white w-full md:max-w-[1500px] px-[16px] md:px-[32px] 
            lg:px-[64px] py-[64px] md:py-[80px] relative md:mt-15 lg:mt-22">
                {/* background animation */}
                <div className="top-0 bottom-0 left-0 max-w-[1216px] absolute w-full">
                    <div className="flex items-center justify-between flex-nowrap overflow-hidden relative h-full w-full opacity-[1] p-0 max-w-full">
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
                    </div>
                </div>

                {/* shadow divs */}
                <div className="h-[120px] top-0 left-0 right-0 absolute overflow-hidden bg-[linear-gradient(180deg,#000,#0000)]"></div>
                <div className="h-[120px] -bottom-25 left-0 right-0 absolute overflow-hidden bg-[linear-gradient(180deg,#000,#0000)]"></div>

                <div className="flex flex-col lg:flex-row items-center justify-center w-full overflow-visible gap-15 md:gap-20 lg:gap-[160px] relative service-section">
                    {/* about image */}
                    <div className="flex items-center flex-nowrap w-full lg:w-min h-min rounded-[24px] justify-center overflow-hidden p-px relative bg-[linear-gradient(214deg,rgb(43,43,46)_0%,rgb(43,43,46)_9%,rgb(168,168,181)_20%,rgb(73,73,77)_40%,rgb(43,43,46)_62.1622%,rgb(43,43,46)_100%)]">
                        <div className="flex-1 md:flex-none w-full h-[400px] md:h-[600px] lg:h-[700px] lg:w-[510px] relative rounded-[23px]">
                            <div className="absolute inset-0">
                                <img src={aboutImage} alt="" className="w-full h-full object-center object-cover rounded-[23px]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start flex-1 gap-10 flex-nowrap overflow-visible justify-start relative">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3 items-center relative">
                                <img src={logoIcon} alt="" className="size-8 mb-4 absolute bottom-2 -left-6 md:left-0 hidden md:block" />
                                <p className="text-xs lg:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest">CIPHER BLINKS</p>
                            </div>
                            <h5 className="text-3xl md:text-7xl lg:text-8xl font-bold leading-8 md:leading-[106px]">About</h5>
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-[rgba(255,255,255,.7)] text-sm md:text-base font-light md:font-semibold leading-[1.4em] tracking-tight">
                                Throughout my career, I’ve had the privilege of working with both rising startups and industry leaders,
                                including <span className="text-white font-bold">Apple, Tesla</span><strong className="text-base font-semibold">, and </strong><span className="text-white font-bold">Stripe.</span> These experiences have shaped my perspective on innovation, efficiency, and user-centric design.
                            </p>
                            <p className="text-[rgba(255,255,255,.7)] text-sm md:text-base font-light md:font-semibold leading-[1.4em] tracking-tight">
                                What sets my work apart is my intentional approach, the method of designing meaningful interfaces that drive results.
                            </p>
                            <p className="text-[rgba(255,255,255,.7)] text-sm md:text-base font-light md:font-semibold leading-[1.4em] tracking-tight">
                                My journey with product design started in a quite surprising way, it had begun after watching a science fiction movie.
                            </p>
                        </div>
                        <Button name='Know the full story' icon={true} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About