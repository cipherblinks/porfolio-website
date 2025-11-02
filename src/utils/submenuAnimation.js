import { gsap } from "gsap";

/**
 * Initialize submenu toggle animation with button text toggle.
 * 
 * @param {string|HTMLElement} trigger - The button or element that toggles the submenu.
 * @param {string|HTMLElement} submenu - The submenu element to animate.
 */
export function initSubmenuAnimation(trigger, submenu) {
  let isOpen = false;

  const triggerEl = typeof trigger === "string" ? document.querySelector(trigger) : trigger;
  const submenuEl = typeof submenu === "string" ? document.querySelector(submenu) : submenu;

  if (!triggerEl || !submenuEl) {
    console.warn("⚠️ initSubmenuAnimation: Missing trigger or submenu element.");
    return;
  }

  const handleToggle = () => {
    if (isOpen) {
      // Animate close
      gsap.to(submenuEl, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          submenuEl.style.display = "none";
        },
      });

      // Change button text back to "Menu"
      const button = triggerEl.querySelector("button");
      if (button) button.textContent = "Menu";

      isOpen = false;
    } else {
      // Animate open
      submenuEl.style.display = "block";
      submenuEl.style.height = "auto";
      submenuEl.style.opacity = 1;

      const fullHeight = submenuEl.scrollHeight;
      submenuEl.style.height = 0;
      submenuEl.style.opacity = 0;

      gsap.to(submenuEl, {
        height: fullHeight,
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          submenuEl.style.height = "auto";
        },
      });

      // Change button text to "Close"
      const button = triggerEl.querySelector("button");
      if (button) button.textContent = "Close";

      isOpen = true;
    }
  };

  triggerEl.addEventListener("click", handleToggle);

  // Cleanup function
  return () => {
    triggerEl.removeEventListener("click", handleToggle);
  };
}
