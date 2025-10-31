import cssLogoImage from '/src/assets/images/css.png'
import htmlLogoImage from '/src/assets/images/html.png'
import javascriptLogoImage from '/src/assets/images/js.png'
import expressJSLogoImage from '/src/assets/images/expressJS.png'
import nodeJSLogoImage from '/src/assets/images/node.png'
import tailwindLogoImage from '/src/assets/images/tailwind.png'
import reactLogoImage from '/src/assets/images/react.png'
import bootstrapLogoImage from '/src/assets/images/bootstrap.png'

function ProjectList() {
    return (
        <section className="flex items-center justify-center px-[16px] md:px-[42px] lg:px-[64px] w-full max-w-[1440px] md:max-w-[1440px] py-[40px] md:py-[120px] mx-auto overflow-hidden relative">
            <div className="flex items-start flex-1 flex-col gap-[8px] w-full flex-nowrap justify-center max-w-[1226px] overflow-visible p-0 scroll-container cursor-pointer">
                <div className="flex-none h-[40px] w-full relative">
                    <a href="" className="h-full w-full overflow-hidden relative">
                        <section className="flex size-full max-h-full max-w-full m-0 p-0 mask-fade-x overflow-hidden place-items-center">
                            <div className="animate-scroll">

                                <div className="flex items-center flex-nowrap gap-5">
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold border">
                                        <img src={cssLogoImage} alt="CSS logo" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">CSS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={htmlLogoImage} alt="HTML logo" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">HTML</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center">
                                        <img src={javascriptLogoImage} alt="javascript logo" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Javascript</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={expressJSLogoImage} alt="Express Js logo" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Express JS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center">
                                        <img src={nodeJSLogoImage} alt="Node js logo" className="h-[60px] w-[60px]" />
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={reactLogoImage} alt="React logo" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">React JS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={tailwindLogoImage} alt="Tailwind CSS logo" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Tailwind CSS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={bootstrapLogoImage} alt="Bootstrap Logo" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Bootstrap</h1>
                                    </div>
                                </div>

                                <div className="flex items-center flex-nowrap gap-5">
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={cssLogoImage} alt="" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">CSS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={htmlLogoImage} alt="" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">HTML</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center">
                                        <img src={javascriptLogoImage} alt="" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Javascript</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={expressJSLogoImage} alt="" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Express JS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center">
                                        <img src={nodeJSLogoImage} alt="" className="h-[60px] w-[60px]" />
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={reactLogoImage} alt="" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">React JS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={tailwindLogoImage} alt="" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Tailwind CSS</h1>
                                    </div>
                                    <div className="h-[60px] w-[205px] flex items-center text-lg font-semibold">
                                        <img src={bootstrapLogoImage} alt="" className="h-[60px] w-[60px]" />
                                        <h1 className="text-white">Bootstrap</h1>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectList