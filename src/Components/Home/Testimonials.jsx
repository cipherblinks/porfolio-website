import { useEffect } from "react";
import TestimonialsCard from "../TestimonialsCard"
import { parallaxScroll, scrollAnimateText } from "../.."

function Testimonials() {
    useEffect(() => {
        parallaxScroll("[data-speed]");
        scrollAnimateText(".testimonials-subHeading");
        scrollAnimateText(".testimonials-heading");
    }, []);

    return (
        <>
            <section className="flex items-start justify-start overflow-visible gap-[10px] text-white w-full md:max-w-[1500px] 
            mx-auto py-[120px] px-[64px] relative">

                <div className="flex flex-col gap-40 w-full">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="flex gap-3 items-center relative">
                            <p className="text-xs md:text-sm text-[rgba(255,255,255,0.6)] font-bold uppercase leading-[1.3em] tracking-widest testimonials-subHeading">Testimonials</p>
                        </div>
                        <div className="flex gap-3 items-center relative" data-speed="1">
                            <h5 className="text-3xl md:text-8xl font-bold leading-8 md:leading-[106px] testimonials-heading" >Trusted by partners</h5>
                            <img src="/src/assets/images/logo.svg" alt="" className="size-8 mb-4 absolute bottom-12 -right-5" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center overflow-visible w-full gap-[32px] relative flex-nowrap">
                        <div className="flex items-start flex-1 justify-center overflow-visible w-full gap-[32px] relative flex-nowrap transform perspective-distant">
                            {/* translate-y-[-82.8866px] */}
                            <div className="flex flex-col gap-6 w-full relative overflow-hidden transform perspective-distant" data-speed="0.5">
                                <TestimonialsCard image="/src/assets/testimonials/test1.avif"
                                    comment='"Working with Cipher blinks was seamless. He built our internal dashboard using React and Node.js, and it performs flawlessly. 
                                    Communication was clear, and delivery was even ahead of schedule."'
                                    name='Sarah Johnson,' role='Product Manager' company='FinEdge Analytics' />

                                <TestimonialsCard image="/src/assets/testimonials/test2.avif"
                                    comment='"He turned our business idea into a fully functional SaaS platform in less than three weeks. The UI is fast, clean, and mobile-friendly. 
                                    Couldn’t have asked for better technical support."'
                                    name='David Mensah' role='Founder' company='SwiftTrack Technologies' />

                            </div>

                            <div className="flex flex-col gap-6 w-full relative overflow-visible transform perspective-distant translate-y-[-67.7291px]" data-speed="0.1">
                                <TestimonialsCard image="/src/assets/testimonials/test3.avif"
                                    comment='"Our e-commerce site now runs smoother than ever. He handled everything — from frontend design with Tailwind to 
                                    backend payment integration with Node.js and PostgreSQL."'
                                    name='Lisa Nguyen' role='Marketing Lead' company='UrbanMart Online' />

                                <TestimonialsCard image="/src/assets/testimonials/test4.avif"
                                    comment='"Professional, detail-oriented, and reliable. He built us a real-time chat system with WebSockets and delivered exactly what we needed for our client portal."'
                                    name='Ahmed Kareem' role='CTO' company='DataVerse Solutions' />

                            </div>

                            {/* translate-y-[-67.7291px] */}
                            <div className="flex flex-col gap-6 w-full relative overflow-hidden transform perspective-distant " data-speed="0.5">
                                <TestimonialsCard image="/src/assets/testimonials/test5.avif"
                                    comment='"We hired him to rebuild our outdated company site, and the new version is stunning. It’s fast, secure, 
                                    and easy for us to manage. Highly recommend his full-stack expertise.”'
                                    name='Martha Okeke' role='Operations Manager' company='BrightEdge Consulting' />

                                <TestimonialsCard image="/src/assets/testimonials/test6.avif"
                                    comment='"Excellent work ethic! He helped integrate RESTful APIs and authentication into our web app. 
                                    Everything works perfectly, and he provided great post-delivery support."'
                                    name='Jean-Paul Dubois' role='Software Architect' company='Nova Systems' />

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Testimonials