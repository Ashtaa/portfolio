import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Determine the section ID based on the route path
    const sectionId = pathname === "/" ? "home" : pathname.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
