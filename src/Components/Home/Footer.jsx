import Button from "./Button"
import logoIcon from "/src/assets/images/logo.svg";
import footerImage from '/src/assets/images/hero-image.png'

function Footer() {
    return (
        <>
            <section className="flex items-start flex-col justify-start overflow-visible gap-[10px] text-white w-full md:max-w-[1500px] 
            px-[16px] md:px-[32px] lg:px-[64px] md:py-[80px] mt-15 md:mt-15 lg:mt-22 relative">
                <div className="bg-[rgb(255,70,37)] blur-[100px] rounded-[999px] w-[500px] h-[86px] absolute bottom-[-25px] opacity-[1] overflow-hidden left-[calc(26.04166666666669%-500px/2)]"></div>
                <div className="bg-[rgb(37,88,255)] blur-[100px] rounded-[999px] w-[653px] h-[61px] absolute bottom-[-26px] opacity-[1] overflow-hidden left-[calc(37.361111111111136%-653px/2)]"></div>
                <div className="flex items-start flex-col md:flex-row gap-[34px] md:gap-[24px] pt-[50px] pb-[40px] md:pt-[120px] md:pb-[80px] overflow-visible justify-center flex-nowrap 
                relative w-full border-t border-b border-[rgba(255,255,255,.2)]">
                    <div className="flex flex-col items-start justify-center w-[400px] h-full gap-[24px]">
                        <div className="flex flex-col items-start justify-center w-full h-full space-y-1">
                            <div className="flex gap-3 items-center relative">
                                <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest">Cipher</p>
                            </div>
                            <div className="flex gap-3 items-center relative">
                                <h5 className="text-4xl md:text-5xl font-bold leading-[1.1em] tracking-[-0.01em]">Blinks</h5>
                                <img src={logoIcon} alt="" className="size-4 absolute bottom-5 md:bottom-8 -right-4" />
                            </div>
                            <div className="flex shrink-0 items-start w-full relative">
                                <p className="font-medium text-sm md:text-base text-[rgba(255,255,255,.7)] leading-[1.4em]">
                                    Helping founders develop their fintech startups with data-driven design and the intentional approach that delivers excellent results.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button icon={false} name=' Contact now' />
                        </div>

                    </div>
                    <div className="flex items-start flex-1 flex-nowrap gap-[64px] overflow-hidden relative justify-start md:justify-end w-full">

                        <div className="flex items-start md:items-end flex-col flex-nowrap gap-[12px] justify-center overflow-hidden relative w-min">
                            <div className="flex flex-col items-start shrink-0">
                                <p className="text-xl md:text-[22px] font-medium text-nowrap">Cipherblinks</p>
                            </div>
                            <div className="flex items-start md:items-end flex-col flex-nowrap relative overflow-hidden justify-center gap-[8px]">
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Work
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Ventures
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Blog
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            About
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Contact
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            404
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start md:items-end flex-col flex-nowrap gap-[12px] justify-center overflow-hidden relative w-min">
                            <div className="flex flex-col items-start shrink-0">
                                <p className="text-xl md:text-[22px] font-medium text-nowrap">Social Media</p>
                            </div>
                            <div className="flex items-start md:items-end flex-col flex-nowrap relative overflow-hidden justify-center gap-[8px]">
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Contra
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Instagram
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            X(Twitter)
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Linkedin
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            TikTok
                                        </a>
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-start">
                                    <p className="text-sm md:text-base font-normal leading-[1.4em] text-[rgba(255,255,255,.7)]">
                                        <a href="" className="footer-fancy-link-nav">
                                            Upwork
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col md:flex-row items-start justify-center relative w-full gap-[24px] overflow-visible pt-10">
                    <div className="flex items-start flex-nowrap justify-start overflow-visible relative">
                        <p className="text-xs md:text-sm font-mono">Buy my templates now</p>
                    </div>
                    <div className="flex items-center md:flex-1 flex-nowrap overflow-visible relative justify-start w-full md:justify-end gap-3">
                        <div>
                            <p className="text-xs md:text-sm font-mono text-[rgba(255,255,255,.7)]">
                                Created by
                            </p>
                        </div>
                        <div className="h-[42px] relative w-[42px] rounded-[999px] overflow-hidden bg-black shrink-0">
                            <img src={footerImage} alt="" className="w-full h-full object-center object-cover shrink-0" />
                        </div>
                        <div>
                            <p className="text-xs md:text-sm font-mono">Blinks</p>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default Footer