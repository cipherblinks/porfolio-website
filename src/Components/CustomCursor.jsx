import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor({ selector = ".use-custom-cursor" }) {
    const cursorRef = useRef(null);
    const insideRef = useRef(false); // track if cursor is inside any target

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const move = (e) => {
            gsap.to(cursor, {
                x: e.clientX - 20,
                y: e.clientY - 20,
                duration: 0.8,
                ease: "power3.out",
            });
        };

        const targets = gsap.utils.toArray(selector);
        if (!targets.length) return;

        const listeners = [];

        const showCursor = (e) => {
            insideRef.current = true;
            cursor.style.display = "block";
            gsap.set(cursor, { x: e.clientX - 20, y: e.clientY - 20 });
            gsap.fromTo(
                cursor,
                { scale: 1, opacity: 0 },
                {
                    scale: 1.8,
                    opacity: 1,
                    duration: 0.25,
                    ease: "back.out(3)",
                }
            );
            window.addEventListener("mousemove", move);
        };

        const hideCursor = () => {
            insideRef.current = false;

            // Delay a little in case we move immediately into another target
            setTimeout(() => {
                if (!insideRef.current) {
                    gsap.to(cursor, {
                        scale: 0.6,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power3.inOut",
                        onComplete: () => {
                            cursor.style.display = "none";
                        },
                    });
                    window.removeEventListener("mousemove", move);
                }
            }, 50);
        };

        targets.forEach((target) => {
            const enter = (e) => {
                target.style.cursor = "none";
                showCursor(e);
            };

            const leave = () => {
                target.style.cursor = "";
                hideCursor();
            };

            target.addEventListener("mouseenter", enter);
            target.addEventListener("mouseleave", leave);

            listeners.push({ target, enter, leave });
        });

        return () => {
            window.removeEventListener("mousemove", move);
            listeners.forEach(({ target, enter, leave }) => {
                target.style.cursor = "";
                target.removeEventListener("mouseenter", enter);
                target.removeEventListener("mouseleave", leave);
            });
        };
    }, [selector]);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-9999 pointer-events-none hidden md:block"
            style={{
                width: "40px",
                height: "40px",
                transform: "translate(-50%, -50%)",
                display: "none",
            }}
        >
            <div className="h-full w-full flex cursor-pointer gap-[10px] justify-center items-center overflow-visible relative">
                <div className="flex items-center flex-1 h-full relative p-px overflow-hidden justify-center flex-nowrap rounded-full shadow-[0_0.48175px_0.86715px_-0.0833333px_rgba(0,0,0,0.05),0_1.83083px_3.29549px_-0.166667px_rgba(0,0,0,0.13),0_8px_14.4px_-0.25px_rgba(0,0,0,0.475)] 
                                            bg-[linear-gradient(215deg,rgba(43,43,46,1)_0%,rgba(43,43,46,1)_13%,rgba(168,168,181,1)_20%,rgba(73,73,77,1)_40%,rgba(43,43,46,1)_62.1622%,rgba(43,43,46,1)_100%)]">
                    <div className="bg-[linear-gradient(38deg,rgb(11,11,13)48%,rgb(33,33,36)100%)] rounded-full flex flex-1 items-center justify-center  *:overflow-visible h-full">
                        <div className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
