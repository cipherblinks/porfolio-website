import Button from "./Button"
import { scrollAnimateText } from "../.."
import { useEffect } from "react";


function Service() {

    useEffect(() => {
        scrollAnimateText(".service-heading");
        scrollAnimateText(".service-subHeading");
        // animateServiceList(".service-list");
    }, []);

    return (
        <>
            {/* service */}
            <section className="flex flex-col gap-20 md:gap-25 text-white md:max-w-[1500px] mx-auto w-full px-[16px] md:px-20 mt-20 md:mt-32">
                <div>
                    <div className="flex gap-3 items-center relative">
                        <img src="/src/assets/images/logo.svg" alt="" className="size-8 mb-4 absolute bottom-2 md:-left-6" />
                        <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest service-subHeading">Level Up Your BUSINESS</p>
                    </div>
                    <h5 className="text-3xl md:text-8xl font-bold leading-8 md:leading-[106px] service-heading">
                        Services
                    </h5>
                </div>

                <div className="flex flex-col md:flex-row gap-20 md:gap-5 ">
                    <div className="flex flex-col gap-5">
                        <div>
                            <img src="/src/assets/images/frontend.avif" alt="" className="h-16" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="font-bold text-2xl lg:text-[32px] leading-[1.4em] font-[Inter_Display] kkk">Frontend Development</h5>
                            <p className="text-sm font-semibold leading-[1.4em] tracking-0 text-[rgba(255,255,255,0.6)] whitespace-pre-wrap">
                                Official Frontend web Expert creating custom web solutions that converts.
                                Engage your clients with visually striking and functional experiences.
                                Full assistance with site publication included.
                            </p>
                            <p className="text-[rgba(255,255,255,0.7)] md:ext-base font-semibold leading-[1.4em] text-sm">From 200 USD</p>
                        </div>
                        <div>
                            <Button name={`Book a call`} icon={true} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <img src="/src/assets/images/backend.avif" alt="" className="h-16" />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h5 className="font-bold text-2xl lg:text-[32px] leading-[1.4em] font-[Inter_Display]">Backend Development</h5>
                            <p className="text-sm font-semibold leading-[1.4em] text-[rgba(255,255,255,0.6)] line-clamp-4 whitespace-pre-wrap">
                                A great design isn’t just about looks. It’s about clarity and ease of use. Let's design app or site that
                                engage your users, and elevate your brand with thoughtful interactions and polished aesthetics.
                            </p>
                            <p className="text-[rgba(255,255,255,0.7)] md:text-base font-semibold leading-[1.4em] text-sm">From 1,000 USD</p>
                        </div>
                        <div>
                            <Button name={`Book a call`} icon={true} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <img src="/src/assets/images/ux.avif" alt="" className="h-16" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="font-bold text-2xl lg:text-[32px] leading-[1.4em] font-[Inter_Display]">UX Audit</h5>
                            <p className="text-sm font-semibold leading-[1.4em] tracking-0 text-[rgba(255,255,255,0.6)] line-clamp-4 whitespace-pre-wrap">
                                Struggling with website performance? A usability audit reveal pain points of your customers,
                                and provides actionable insights to boost conversion. Excellent first step into growing your business.
                            </p>
                            <p className="text-[rgba(255,255,255,0.7)] md:text-base font-semibold leading-[1.4em] text-sm">From 900 USD</p>
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