import { useEffect, useState } from "react";
import CustomCursor from "../CustomCursor";

function WorkFeatures(props) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            {isDesktop && <CustomCursor selector=".use-custom-cursor" />}
            <div className="flex items-center flex-col gap-[32px] w-full justify-start flex-nowrap self-center justify-self-start relative group ">
                <div className="relative w-full h-auto">
                    <a className="use-custom-cursor flex items-center flex-col overflow-hidden relative h-[320px] md:h-[400px] lg:h-[563px] justify-center
                    w-full lg:w-full p-px rounded-[24px] bg-[linear-gradient(214deg,rgb(43,43,46)_0%,rgb(43,43,46)_9%,rgb(168,168,181)_20%,rgb(73,73,77)_40%,rgb(43,43,46)_62.1622%,rgb(43,43,46)_100%)]">

                        <div className="flex flex-col flex-1 gap-[10px] items-center justify-center relative p-0 w-full overflow-hidden rounded-[23px] bg-[linear-gradient(163deg,rgb(0,0,0)_82%,rgb(0,0,0)_100%)]">
                            {/* image div */}
                            <div className="flex-1 w-full overflow-hidden relative">
                                <div className="inset-0 absolute">
                                    <div className="absolute inset-0 rounded-[23px] overflow-hidden">
                                        <div className="rounded-[23px] md:transition-transform md:duration-500 md:ease-in-out md:group-hover:scale-105">
                                            <img src={props.image} alt="" className="w-full h-full object-center object-cover" />
                                        </div>
                                    </div>
                                    {/* shadow div */}
                                    <div className="bg-[linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_100%)] transform-none origin-center h-[200px] bottom-0 absolute left-0 right-0 overflow-hidden"></div>

                                    <div className={`${!props.featured ? 'hidden' : 'block'} absolute top-[24px] left-[24px]`}>
                                        <div className="bg-[rgb(22,22,23)] rounded-[4px] flex items-center pointer-cursor flex-col justify-center py-[4px] px-[8px] overflow-hidden relative">
                                            <p className="text-[10px] md:text-xs font-normal md:font-bold tracking-widest leading-[1.3em]">
                                                {props.featured}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-start flex-col gap-[4px] md:gap-[8px] overflow-hidden justify-end md:justify-center w-full relative pt-0 px-6 pb-6">
                                <div>
                                    <h3 className="text-lg md:text-2xl font-semibold md:font-bold tracking-[.01em] leading-[1.4em]">{props.heading}</h3>
                                </div>
                                <div>
                                    <p className="text-sm md:text-base leading-[1.4em] font-medium text-[rgba(255,255,255,0.6)]">{props.paragraph}</p>
                                </div>
                            </div>
                        </div>

                    </a>
                </div>
            </div>

        </>

    )
}

export default WorkFeatures