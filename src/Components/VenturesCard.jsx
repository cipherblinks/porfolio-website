function VenturesCard(props) {
    return (
        <>

            <a className="use-custom-cursor scroll-section flex items-center gap-[40px] h-min md:h-[200px] p-px justify-center relative rounded-[24px] w-full
                         overflow-hidden bg-[linear-gradient(214deg,rgb(43,43,46)_0%,rgb(43,43,46)_9%,rgb(168,168,181)_20%,rgb(73,73,77)_40%,rgb(43,43,46)_62.1622%,rgb(43,43,46)_100%)]">
                <div className="flex items-center flex-col md:flex-row justify-start relative overflow-hidden h-min md:h-[198px] md:flex-1 w-full rounded-[23px] 
                            gap-[10px] bg-[linear-gradient(163deg,rgb(0,0,0)_82%,rgb(41,41,43)_100%)]">
                    {/* image div */}
                    <div className="w-full md:w-[288px] lg:w-[400px] h-[200px] md:h-full relative overflow-hidden ">
                        <img src={props.image} alt="" className="w-full h-full object-center object-cover" />
                    </div>

                    <div className="flex items-start justify-center md:flex-1 flex-col gap-[8px] w-full h-full relative pt-[24px] pl-[24px] pr-[24px] 
                                lg:pr-[80px] pb-[28px] lg:pb-[24px]">
                        <div className="hidden lg:block absolute h-[40px] w-[40px] top-[24px] right-[24px]">
                            <div className="h-full w-full flex gap-[10px] justify-center items-center overflow-visible relative">
                                <div className="flex items-center flex-1 h-full relative p-px overflow-hidden justify-center flex-nowrap rounded-full shadow-[0_0.48175px_0.86715px_-0.0833333px_rgba(0,0,0,0.05),0_1.83083px_3.29549px_-0.166667px_rgba(0,0,0,0.13),0_8px_14.4px_-0.25px_rgba(0,0,0,0.475)] 
                                            bg-[linear-gradient(215deg,rgba(43,43,46,1)_0%,rgba(43,43,46,1)_13%,rgba(168,168,181,1)_20%,rgba(73,73,77,1)_40%,rgba(43,43,46,1)_62.1622%,rgba(43,43,46,1)_100%)]">
                                    <div className="bg-[linear-gradient(38deg,rgb(11,11,13)48%,rgb(33,33,36)100%)] rounded-full flex flex-1 items-center justify-center  *:overflow-visible h-full">
                                        <div className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="text-xl lg:text-2xl font-semibold tracking-[.01em] leading-[1.4em]">{props.heading}</h5>
                        <p className="text-sm lg:text-base font-medium text-[rgba(255,255,255,.7)] leading-[1.4em] tracking-tight">{props.paragraph}</p>
                        <div>
                            <p className="text-sm md:text-base font-light tracking-tight">Coming soon -&gt; </p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default VenturesCard