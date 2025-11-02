import { useEffect } from "react";
import Button from "./Button"
import logoIcon from "/src/assets/images/logo.svg";
import { initSubmenuAnimation } from "../../utils/submenuAnimation";

function Header() {
    useEffect(() => {
        const cleanup = initSubmenuAnimation("#subMenuView", "#subMenu");
        return cleanup;
    }, []);

    return (
        <>
            <header className="flex-none h-[48px] lg:h-[64px] left-[8px] md:left-0 overflow-visible fixed right-[8px] md:right-0 top-[15px] lg:top-[40px] z-10">
                {/* <!-- navbar --> */}
                <div className="inset-y-0 md:inset-x-[16px] absolute w-full md:w-auto">
                    <nav className="flex items-center justify-center flex-nowrap p-0 relative h-full w-full">
                        <div
                            className="flex-1 backdrop-blur-[10px] nav-background-color rounded-full h-full shadow-custom border flex items-center justify-between py-6 pl-6 pr-1 lg:px-6 relative overflow-visible">
                            {/* <!-- logo --> */}
                            <div className="flex items-center text-(--primary-text)">
                                <p className="">
                                    <a href="" className="fancy-link text-2xl font-font-medium leading-[1.6em]">Cipherblinks</a>
                                </p>
                                <img src={logoIcon} alt="" className="size-3 mb-4" />
                            </div>
                            {/* <!-- menu --> */}
                            <ul
                                className="uppercase space-x-10 text-base font-medium tracking-widest font-family text-(--primary-text) hidden lg:flex">
                                <li className="fancy-link-nav">WORK</li>
                                <li className="fancy-link-nav">About</li>
                                <li className="fancy-link-nav">Ventures</li>
                                <li className="fancy-link-nav">Articles</li>
                                <li className="fancy-link-nav">Contact</li>
                            </ul>
                            <div className='hidden lg:block'>
                                <Button name={`Whatsapp Me`} icon={true} onClick={() => {
                                    window.open("https://wa.me/2348154393597", "_blank");
                                }} />
                            </div>
                            <div className="lg:hidden" id="subMenuView">
                                <Button name="Menu" />
                            </div>
                        </div>
                    </nav>


                    {/* MENU DROP DOWN */}
                    <div className="subMenu items-center w-full hidden" id="subMenu">
                        <nav className="flex items-center justify-center size-full gap-[10px] relative">
                            <div className="w-full flex items-center absolute top-1">
                                <div className="flex flex-col gap-5 items-center justify-center border border-[rgba(255,255,255,.2)] rounded-[24px] bg-[#000000] py-[24px] px-[16px] w-full">
                                    <ul className="uppercase space-y-5 text-xs md:text-base md:font-medium tracking-widest font-family text-(--primary-text) lg:hidden flex flex-col items-center justify-center">
                                        <li >WORK</li>
                                        <li >About</li>
                                        <li >Ventures</li>
                                        <li >Articles</li>
                                        <li >Contact</li>
                                    </ul>

                                    <Button name='WhatsApp Me' icon={true} onClick={() => {
                                        window.open("https://wa.me/2348154393597", "_blank");
                                    }} />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header