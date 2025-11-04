import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);


export const animateText = (target, options = {}) => {
  // Wait for fonts to be loaded before splitting text
  const startAnimation = () => {
    const split = new SplitText(target, { type: "words,chars" });
    const chars = split.chars;

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        rotationX: -90,
        filter: "blur(6px)",
        transformOrigin: "50% 50% -20px",
      },
      {
        duration: 0.8,
        opacity: 1,
        rotationX: 0,
        filter: "blur(0px)",
        ease: "power3.out",
        stagger: 0.04,
        ...options,
      }
    );

    return split;
  };

  // Use font readiness to avoid "SplitText called before fonts loaded"
  if (document.fonts) {
    document.fonts.ready.then(startAnimation);
  } else {
    window.addEventListener("load", startAnimation);
  }
};

export const scrollAnimateText = (target, options = {}) => {
  const el = document.querySelector(target);
  if (!el) return;

  const showText = () => {
    const split = new SplitText(el, { type: "words,chars" });
    const chars = split.chars;

    gsap.fromTo(
      chars,
      {
        autoAlpha: 0,
        x: -40,
        filter: "blur(6px)",
      },
      {
        autoAlpha: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.04,
        ...options,
      }
    );
  };

  // ✅ Wait for fonts before creating SplitText
  const init = () => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 100%",
      toggleActions: "play none none reverse",
      onEnter: showText,
    });

    // If already visible (like on refresh), animate immediately
    requestAnimationFrame(() => {
      if (ScrollTrigger.isInViewport(el)) {
        showText();
      }
    });
  };

  if (document.fonts) {
    document.fonts.ready.then(init);
  } else {
    window.addEventListener("load", init);
  }
};

  export const animateServiceList = (target) => {
    // make sure DOM is ready
    gsap.from(`${target} > *`, {
      y: 80,
      duration: 1.2,
      ease: "power3.out",
  
      scrollTrigger: {
        trigger: target,
        start: "top 85%",        // when section is near viewport
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  };
  
  export const parallaxScroll = (selector = "[data-speed]") => {
    const elements = document.querySelectorAll(selector);
  
    elements.forEach((el, i) => {
      const speed = parseFloat(el.getAttribute("data-speed")) || 0.5;
  
      // Alternate direction: even index moves up, odd index moves down
      const direction = i % 2 === 0 ? 1 : -1;
  
      gsap.to(el, {
        yPercent: direction * speed * 40, // 40 = distance in percentage (tweak as needed)
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",   // start animating when element enters viewport
          end: "bottom top",     // finish when it leaves viewport
          invalidateOnRefresh: true,
          scrub: 1.5,           // link animation to scroll progress
        },
      });
    });
  };

export const slideUpOnScroll = (selector = ".service-section .card", opts = {}) => {
  // safe defaults you can override via opts
  const cfg = {
    startY: opts.startY ?? 10,       // how far down it starts (px) — make this large for a clear move
    endY: opts.endY ?? 0,             // final position
    start: opts.start ?? "top 90%",   // when to start animating
    end: opts.end ?? "top 40%",       // when to finish animating
    scrub: opts.scrub ?? 0.6,         // scrub smoothing (true or number)
    ease: opts.ease ?? "power3.out",
    markers: opts.markers ?? false,   // set true while debugging
  };

  // kill existing triggers if reinitializing (helps dev/hmr)
  ScrollTrigger.getAll().forEach(t => t.kill());

  gsap.utils.toArray(selector).forEach((el) => {
    // ensure transform doesn't cause repaint jank
    el.style.willChange = "transform, opacity";

    // set initial state but don't force immediate render to avoid hiding before trigger
    gsap.set(el, { y: cfg.startY, opacity: 0 });

    // from -> to using scrub so it follows scroll direction (reversible)
    gsap.to(el, {
      y: cfg.endY,
      opacity: 1,
      ease: cfg.ease,
      scrollTrigger: {
        trigger: el,
        start: cfg.start,
        end: cfg.end,
        scrub: cfg.scrub,
        markers: cfg.markers,
        // toggleActions not needed because scrub syncs with scroll;
        // if you want it to also play fully once you reach the end, remove scrub and use toggleActions
        invalidateOnRefresh: true,
      },
    });
  });

  // return ScrollTrigger instance list for optional cleanup
  return ScrollTrigger.getAll();
};

export const animateEachSectionUp = (selector = ".scroll-section") => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",   // when top of the element hits 85% of the viewport
            end: "bottom 60%",  // optional
            toggleActions: "play none none reverse",
            // scrub: true, // uncomment if you want scroll-linked motion
            // markers: true, // enable for debugging
          },
        }
      );
    });
  };
