import Button from "./Button"
import { scrollAnimateText } from "../.."
import { useEffect } from "react";
import logoIcon from "/src/assets/images/logo.svg";
import frontendLogo from "/src/assets/images/frontend.avif"
import backendLogo from "/src/assets/images/backend.avif"
import aiLogo from "/src/assets/images/ux.avif"

function Service() {

    useEffect(() => {
        scrollAnimateText(".service-heading");
        scrollAnimateText(".service-subHeading");
        // animateServiceList(".service-list");
    }, []);

    return (
        <>
            {/* service */}
            <section className="flex flex-col gap-20 md:gap-25 text-white md:max-w-[1500px] mx-auto w-full px-[16px] md:px-[42px] lg:px-[64px] mt-20 lg:mt-32">
                <div>
                    <div className="flex gap-3 items-center relative">
                        <img src={logoIcon} alt="icon" className="size-8 mb-4 absolute bottom-2 -left-6 md:left-0 hidden md:block" />
                        <p className="text-xs lg:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest service-subHeading">Level Up Your BUSINESS</p>
                    </div>
                    <h5 className="text-3xl md:text-7xl lg:text-8xl font-bold leading-8 md:leading-[106px] service-heading">
                        Services
                    </h5>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 md:gap-10 lg:gap-15">
                    <div className="flex flex-col gap-5">
                        <div>
                            <img src={frontendLogo} alt="Frontend Icon" className="h-16" />
                        </div>
                        <div className="flex flex-col gap-2 w-full md:max-w-7xl">
                            <h5 className="font-bold text-2xl lg:text-[32px] leading-[1.4em] font-[Inter_Display]">Frontend Development</h5>
                            <p className="text-sm font-semibold leading-[1.4em] tracking-tight text-[rgba(255,255,255,0.6)] whitespace-pre-wrap line-clamp-4">
                                Frontend Web Expert building custom, high-converting websites that blend beautiful design with powerful functionality.
                                I create digital experiences that engage users and drive real results with full support from concept to live deployment.
                            </p>
                            <p className="text-[rgba(255,255,255,0.7)] md:text-base font-semibold leading-[1.4em] text-sm">From 200 USD</p>
                        </div>
                        <div>
                            <Button name={`Book a call`} icon={true} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <img src={backendLogo} alt="Backend Icon" className="h-16" />
                        </div>
                        <div className="flex flex-col gap-2 w-full md:max-w-7xl">
                            <h5 className="font-bold text-2xl lg:text-[32px] leading-[1.4em] font-[Inter_Display]">Backend Development</h5>
                            <p className="text-sm font-semibold leading-[1.4em] tracking-tight text-[rgba(255,255,255,0.6)] line-clamp-4 whitespace-pre-wrap">
                                Backend Developer focused on building scalable, secure, and high-performance systems.
                                I design efficient APIs, optimize databases, and ensure your application runs flawlessly from the inside out.
                            </p>
                            <p className="text-[rgba(255,255,255,0.7)] md:text-base font-semibold leading-[1.4em] text-sm">From 1,000 USD</p>
                        </div>
                        <div>
                            <Button name={`Book a call`} icon={true} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <img src={aiLogo} alt="SEO Performance Icon" className="h-16" />
                        </div>
                        <div className="flex flex-col gap-2 w-full md:max-w-7xl">
                            <h5 className="font-bold text-2xl lg:text-[32px] leading-[1.4em] font-[Inter_Display]">SEO Performance</h5>
                            <p className="text-sm font-semibold leading-[1.4em] tracking-tight text-[rgba(255,255,255,0.6)] line-clamp-4 whitespace-pre-wrap">
                                Boost visibility. Drive results.
                                I optimize websites for search performance, ensuring fast load times, clean structure, and higher rankings across search engines
                                helping your business get found by the right audience.
                            </p>
                            <p className="text-[rgba(255,255,255,0.7)] md:text-base font-semibold leading-[1.4em] text-sm">From 150 USD</p>
                        </div>
                        <div>
                            <Button name={`Book a call`} icon={true} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service