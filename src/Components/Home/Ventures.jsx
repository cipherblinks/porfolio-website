import { useEffect } from "react";
import { animateEachSectionUp, scrollAnimateText } from "../..";
import CustomCursor from "../CustomCursor";
import VenturesCard from "../VenturesCard";
import logoIcon from "/src/assets/images/logo.svg";
import veturesImage1 from '/src/assets/images/ai.avif'
import veturesImage2 from '/src/assets/images/prime.avif'
import veturesImage3 from '/src/assets/images/Thalio.avif'

function Ventures() {
    useEffect(() => {
        animateEachSectionUp(".scroll-section");
        scrollAnimateText(".ventures-subHeading");
        scrollAnimateText(".ventures-heading");

    }, []);

    return (
        <>
            <CustomCursor selector=".use-custom-cursor" />
            <section className="flex items-start justify-start overflow-visible gap-[10px] text-white w-full md:max-w-[1500px] px-[16px] md:px-[42px] lg:px-[64px] py-[40px] md:py-[120px] relative mt-2 lg:mt-32">
                <div className="flex flex-col gap-10 lg:gap-25">
                    <div className="flex flex-col items-start">
                        <div className="flex gap-3 items-center relative">
                            <p className="text-xs lg:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest ventures-subHeading">Projects</p>
                        </div>
                        <div className="flex gap-3 items-center relative">
                            <h5 className="text-3xl md:text-7xl lg:text-8xl font-bold leading-8 md:leading-[106px] ventures-heading">Ventures</h5>
                            <img src={logoIcon} alt="" className="size-8 mb-4 absolute bottom-12 md:left-74 lg:left-98" />
                        </div>
                    </div>

                    <div className="flex items-center flex-col flex-wrap gap-[16px]">
                        <VenturesCard
                            image={veturesImage1}
                            heading='Backend Development Masterclass'
                            paragraph='Learn how to build robust, scalable backend systems using Node.js, Express, and databases like MongoDB or PostgreSQL. 
                                       Understand APIs, authentication, and performance optimization from scratch. '
                        />
                        <VenturesCard
                            image={veturesImage2}
                            heading='Frontend Development Masterclass'
                            paragraph='Master the art of modern frontend development with React, Tailwind CSS, and Next.js. 
                                       Learn how to create fast, responsive, and elegant web interfaces that stand out.'
                        />
                        <VenturesCard
                            image={veturesImage3}
                            heading='AI for Developers Masterclass'
                            paragraph='Learn how to integrate AI tools and APIs into your workflow. Build smart applications with OpenAI, LangChain, and TensorFlow 
                                       to enhance productivity and innovation as a developer.'
                        />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Ventures