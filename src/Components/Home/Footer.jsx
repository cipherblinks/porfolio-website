import Button from "./Button"

function Footer() {
    return (
        <>
            <section className="flex items-start justify-start overflow-visible gap-[10px] text-white w-full md:max-w-[1500px] 
            mx-auto py-[120px] px-[64px] relative">
                <div className="bg-[rgb(255,70,37)] blur-[100px] rounded-[999px] w-[500px] h-[86px] absolute bottom-[-25px] opacity-[1] overflow-hidden left-[calc(26.04166666666669%-500px/2)]"></div>
                <div className="bg-[rgb(37,88,255)] blur-[100px] rounded-[999px] w-[653px] h-[61px] absolute bottom-[-26px] opacity-[1] overflow-hidden left-[calc(37.361111111111136%-653px/2)]"></div>
                <div className="flex items-start gap-[24px] pt-[120px] pb-[80px] overflow-visible justify-center flex-nowrap 
                relative w-full border-t border-b border-[rgba(255,255,255,.2)]">
                    <div className="flex flex-col items-start justify-center w-[400px] h-full gap-[24px]">
                        <div className="flex flex-col items-start justify-center w-full h-full">
                            <div className="flex gap-3 items-center relative">
                                <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest">Cipher</p>
                            </div>
                            <div className="flex gap-3 items-center relative">
                                <h5 className="text-3xl md:text-5xl font-bold leading-[1.1em] tracking-[-0.01em]">Blinks</h5>
                                <img src="/src/assets/images/logo.svg" alt="" className="size-4 absolute bottom-8 -right-4" />
                            </div>
                            <div className="flex shrink-0 items-start w-full relative">
                                <p className="font-medium text-base text-[rgba(255,255,255,.7)] leading-[1.4em]">
                                    Helping founders develop their fintech startups with data-driven design and the intentional approach that delivers excellent results.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button icon={false} name=' Contact now' />
                        </div>

                    </div>
                    <div className="flex items-start flex-1 flex-nowrap gap-[64px] overflow-hidden relative justify-end w-full">

                        <div className="flex items-end flex-col flex-nowrap gap-[12px] justify-center overflow-hidden relative w-min">
                            <div className="flex flex-col items-start shrink-0">
                                <p className="text-[22px] font-medium text-nowrap">Cipherblinks</p>
                            </div>
                            <div className="flex items-end flex-col flex-nowrap relative overflow-hidden justify-center gap-[8px]">
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Work
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Ventures
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Blog
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            About
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Contact
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            404
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end flex-col flex-nowrap gap-[12px] justify-center overflow-hidden relative w-min">
                            <div className="flex flex-col items-start shrink-0">
                                <p className="text-[22px] font-medium text-nowrap">Social Media</p>
                            </div>
                            <div className="flex items-end flex-col flex-nowrap relative overflow-hidden justify-center gap-[8px]">
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Contra
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Instagram
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            X(Twitter)
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Linkedin
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            TikTok
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Upwork
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer