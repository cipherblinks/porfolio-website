import { createPortal } from "react-dom";
import Header from "./Header";

export default function HeaderPortal() {
    if (typeof window === "undefined") return null;
    return createPortal(<Header />, document.body);
}