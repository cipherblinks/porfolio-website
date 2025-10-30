import { useEffect } from "react";
import { animateEachSectionUp, scrollAnimateText } from "../..";
import CustomCursor from "../CustomCursor";

function Ventures() {
    useEffect(() => {
        animateEachSectionUp(".scroll-section");
        scrollAnimateText(".ventures-subHeading");
        scrollAnimateText(".ventures-heading");

    }, []);

    return (
        <>
            <CustomCursor selector=".use-custom-cursor" />
            <section className="flex items-start justify-start overflow-visible gap-[10px] text-white w-full md:max-w-[1500px] 
            mx-auto py-[120px] px-[64px] relative">

                <div className="flex flex-col gap-25">
                    <div className="">
                        <div className="flex gap-3 items-center relative">
                            <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest ventures-subHeading">Projects</p>
                        </div>
                        <div className="flex gap-3 items-center relative">
                            <h5 className="text-3xl md:text-8xl font-bold leading-8 md:leading-[106px] ventures-heading">Ventures</h5>
                            <img src="/src/assets/images/logo.svg" alt="" className="size-8 mb-4 absolute bottom-12 left-98" />
                        </div>
                    </div>

                    <div className="flex items-center flex-col flex-wrap gap-[16px]">

                        <a className="use-custom-cursor scroll-section flex items-center gap-[40px] h-[200px] p-px justify-center relative rounded-[24px] w-full overflow-hidden bg-[linear-gradient(214deg,rgb(43,43,46)_0%,rgb(43,43,46)_9%,rgb(168,168,181)_20%,rgb(73,73,77)_40%,rgb(43,43,46)_62.1622%,rgb(43,43,46)_100%)]">
                            <div className="flex items-center justify-start relative overflow-hidden h-[198px] flex-1 w-full rounded-[23px] gap-[10px] bg-[linear-gradient(163deg,rgb(0,0,0)_82%,rgb(41,41,43)_100%)]">
                                <div className="w-[400px] h-full relative overflow-hidden ">
                                    <img src="/src/assets/images/ai.avif" alt="" className="w-full h-full object-center object-cover" />
                                </div>

                                <div className="flex items-start justify-center flex-1 flex-col gap-[8px] h-full relative pt-[22px] pr-[80px] pb-[24px] pl-[24px]">
                                    <div className="absolute h-[40px] w-[40px] top-[24px] right-[24px]">
                                        <div className="h-full w-full flex gap-[10px] justify-center items-center overflow-visible relative">
                                            <div className="flex items-center flex-1 h-full relative p-px overflow-hidden justify-center flex-nowrap rounded-full shadow-[0_0.48175px_0.86715px_-0.0833333px_rgba(0,0,0,0.05),0_1.83083px_3.29549px_-0.166667px_rgba(0,0,0,0.13),0_8px_14.4px_-0.25px_rgba(0,0,0,0.475)] 
                                            bg-[linear-gradient(215deg,rgba(43,43,46,1)_0%,rgba(43,43,46,1)_13%,rgba(168,168,181,1)_20%,rgba(73,73,77,1)_40%,rgba(43,43,46,1)_62.1622%,rgba(43,43,46,1)_100%)]">
                                                <div className="bg-[linear-gradient(38deg,rgb(11,11,13)48%,rgb(33,33,36)100%)] rounded-full flex flex-1 items-center justify-center  *:overflow-visible h-full">
                                                    <div className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="text-2xl font-semibold tracking-[.01em] leading-[1.4em]">AI for Designers Masterclass</h5>
                                    <p className="text-base font-medium text-[rgba(255,255,255,.7)] leading-[1.4em]">The practical course created for UX/UI designers to master Al tools.
                                        Discover how to boost design process, create stunning visuals, and craft innovative solutions faster than ever before.
                                    </p>
                                    <div>
                                        <p>Coming soon -&gt; </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="use-custom-cursor scroll-section flex items-center gap-[40px] h-[200px] p-px justify-center relative rounded-[24px] w-full overflow-hidden bg-[linear-gradient(214deg,rgb(43,43,46)_0%,rgb(43,43,46)_9%,rgb(168,168,181)_20%,rgb(73,73,77)_40%,rgb(43,43,46)_62.1622%,rgb(43,43,46)_100%)]">
                            <div className="flex items-center justify-start relative overflow-hidden h-[198px] flex-1 w-full rounded-[23px] gap-[10px] bg-[linear-gradient(163deg,rgb(0,0,0)_82%,rgb(41,41,43)_100%)]">
                                <div className="w-[400px] h-full relative overflow-hidden ">
                                    <img src="/src/assets/images/prime.avif" alt="" className="w-full h-full object-center object-cover" />
                                </div>

                                <div className="absolute h-[40px] w-[40px] top-[24px] right-[24px]">
                                    <div className="h-full w-full flex cursor-pointer gap-[10px] justify-center items-center overflow-visible relative">
                                        <div className="flex items-center flex-1 h-full relative p-px overflow-hidden justify-center flex-nowrap rounded-full shadow-[0_0.48175px_0.86715px_-0.0833333px_rgba(0,0,0,0.05),0_1.83083px_3.29549px_-0.166667px_rgba(0,0,0,0.13),0_8px_14.4px_-0.25px_rgba(0,0,0,0.475)] 
                                            bg-[linear-gradient(215deg,rgba(43,43,46,1)_0%,rgba(43,43,46,1)_13%,rgba(168,168,181,1)_20%,rgba(73,73,77,1)_40%,rgba(43,43,46,1)_62.1622%,rgba(43,43,46,1)_100%)]">
                                            <div className="bg-[linear-gradient(38deg,rgb(11,11,13)48%,rgb(33,33,36)100%)] rounded-full flex flex-1 items-center justify-center  *:overflow-visible h-full">
                                                <div className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-center flex-1 flex-col gap-[8px] h-full relative pt-[22px] pr-[80px] pb-[24px] pl-[24px]">
                                    <h5 className="text-2xl font-semibold tracking-[.01em] leading-[1.4em]">AI for Designers Masterclass</h5>
                                    <p className="text-base font-medium text-[rgba(255,255,255,.7)] leading-[1.4em]">The practical course created for UX/UI designers to master Al tools.
                                        Discover how to boost design process, create stunning visuals, and craft innovative solutions faster than ever before.
                                    </p>
                                    <div>
                                        <p>Coming soon -&gt; </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="use-custom-cursor scroll-section flex items-center gap-[40px] h-[200px] p-px justify-center relative rounded-[24px] w-full overflow-hidden bg-[linear-gradient(214deg,rgb(43,43,46)_0%,rgb(43,43,46)_9%,rgb(168,168,181)_20%,rgb(73,73,77)_40%,rgb(43,43,46)_62.1622%,rgb(43,43,46)_100%)]">
                            <div className="flex items-center justify-start relative overflow-hidden h-[198px] flex-1 w-full rounded-[23px] gap-[10px] bg-[linear-gradient(163deg,rgb(0,0,0)_82%,rgb(41,41,43)_100%)]">
                                <div className="w-[400px] h-full relative overflow-hidden ">
                                    <img src="/src/assets/images/Thalio.avif" alt="" className="w-full h-full object-center object-cover" />
                                </div>

                                <div className="absolute h-[40px] w-[40px] top-[24px] right-[24px]">
                                    <div className="h-full w-full flex cursor-pointer gap-[10px] justify-center items-center overflow-visible relative">
                                        <div className="flex items-center flex-1 h-full relative p-px overflow-hidden justify-center flex-nowrap rounded-full shadow-[0_0.48175px_0.86715px_-0.0833333px_rgba(0,0,0,0.05),0_1.83083px_3.29549px_-0.166667px_rgba(0,0,0,0.13),0_8px_14.4px_-0.25px_rgba(0,0,0,0.475)] 
                                            bg-[linear-gradient(215deg,rgba(43,43,46,1)_0%,rgba(43,43,46,1)_13%,rgba(168,168,181,1)_20%,rgba(73,73,77,1)_40%,rgba(43,43,46,1)_62.1622%,rgba(43,43,46,1)_100%)]">
                                            <div className="bg-[linear-gradient(38deg,rgb(11,11,13)48%,rgb(33,33,36)100%)] rounded-full flex flex-1 items-center justify-center  *:overflow-visible h-full">
                                                <div className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-center flex-1 flex-col gap-[8px] h-full relative pt-[22px] pr-[80px] pb-[24px] pl-[24px]">
                                    <h5 className="text-2xl font-semibold tracking-[.01em] leading-[1.4em]">AI for Designers Masterclass</h5>
                                    <p className="text-base font-medium text-[rgba(255,255,255,.7)] leading-[1.4em]">The practical course created for UX/UI designers to master Al tools.
                                        Discover how to boost design process, create stunning visuals, and craft innovative solutions faster than ever before.
                                    </p>
                                    <div>
                                        <p>Coming soon -&gt; </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Ventures