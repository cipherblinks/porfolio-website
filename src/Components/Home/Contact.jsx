import { useEffect } from "react";
import { scrollAnimateText } from "../.."
import logoIcon from "/src/assets/images/logo.svg";

function Contact() {
    useEffect(() => {
        scrollAnimateText(".contact-subHeading");
        scrollAnimateText(".contact-heading");
    }, []);

    return (
        <>
            <section className="flex items-start justify-start overflow-visible gap-[10px] text-white w-full md:max-w-[1500px] 
            px-[16px] md:px-[32px]  lg:px-[64px] md:py-[80px] md:mt-15 lg:mt-22 relative">
                <div className="flex items-centercenter justify-center flex-col gap-10 md:gap-20 w-full">
                    <div className="flex flex-col items-start justify-center w-full h-full">
                        <div className="flex gap-3 items-center relative">
                            <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest contact-heading">Contact</p>
                        </div>
                        <div className="flex gap-3 items-center relative">
                            <h5 className="text-3xl md:text-7xl lg:text-8xl font-bold leading-8 md:leading-[106px] contact-subHeading">Level up your business</h5>
                            <img src={logoIcon} alt="" className="size-8 mb-4 absolute bottom-12 -right-5 hidden md:block" />
                        </div>
                    </div>

                    <div className="flex items-start flex-col md:flex-row gap-[64px] overflow-x-hidden relative justify-center w-full">
                        <div className="flex flex-col justify-start flex-1 space-y-4 relative ">
                            <p className="text-[rgba(255,255,255,.7)] font-semibold text-sm md:text-[18px]">
                                Describe your challenges and needs. Within 24 hours I will contact you to book a call and plan the entire strategy together on how to start improving your app or website.
                            </p>
                            <p className="text-[rgba(255,255,255,.7)] text-sm md:text-[18px]">Let's connect!</p>
                        </div>

                        {/* form */}
                        <form action="" className="flex items-start flex-col flex-nowrap overflow-hidden w-full md:w-[60%] relative justify-start gap-[16px]">
                            <label className="flex flex-col items-start gap-[4px] justify-start relative w-full">
                                <div>
                                    <p className="text-xs font-medium md:font-semibold text-[rgba(255,255,255,.7)] leading-[1.6em]">Name</p>
                                </div>
                                <div className="flex items-center bg-[rgba(187,187,187,0.15)] border border-[#bbbbbb26] rounded-[10px] h-[44px] relative w-full">
                                    <input type="text" required placeholder="Cipher Blinks" className="bg-transparent text-sm font-medium text-[rgb(153,153,153)]
                                     border-none p-[8px] h-[44px] relative w-full text-ellipsis size-full focus:outline-0 focus:outline-[rgb(144,144,144)] placeholder:font-normal md:placeholder:font-medium" />
                                </div>
                            </label>

                            <label className="flex flex-col items-start gap-[4px] justify-start relative w-full">
                                <div>
                                    <p className="text-xs font-medium md:font-semibold text-[rgba(255,255,255,.7)] leading-[1.6em]">Email</p>
                                </div>
                                <div className="flex items-center bg-[rgba(187,187,187,0.15)] border border-[#bbbbbb26] rounded-[10px] h-[44px] relative w-full">
                                    <input type="email" required placeholder="contact@cipherblinks.dev" className="bg-transparent text-sm font-medium text-[rgb(153,153,153)] 
                                     border-none p-[8px] h-[44px] relative w-full text-ellipsis size-full focus:outline-0 focus:outline-[rgb(144,144,144)] placeholder:font-normal md:placeholder:font-medium" />
                                </div>
                            </label>

                            <label className="flex flex-col items-start gap-[4px] justify-start relative w-full">
                                <div>
                                    <p className="text-xs font-medium md:font-semibold text-[rgba(255,255,255,.7)] leading-[1.6em]">Message</p>
                                </div>
                                <div className="flex items-center bg-[rgba(187,187,187,0.15)] border border-[#bbbbbb26] rounded-[10px] relative w-full p-[12px] min-h-[120px]">
                                    <textarea name="" required id="" placeholder="Your message" className="flex w-full focus:outline-0 focus:outline-[rgb(144,144,144)] resize-y overflow-y-auto
                                    placeholder:font-normal md:placeholder:font-medium bg-transparent text-sm font-medium text-[rgb(153,153,153)] border-none p-[8px] min-h-[120px] h-full"></textarea>
                                </div>
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <button
                                    className="px-6 py-2 text-sm md:text-base w-full bg-black font-medium rounded-full border border-custom cursor-pointer transition delay-200 duration-500 ease-in-out hover:bg-button-dark">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact