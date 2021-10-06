import { useState } from "react";
import cn from "classnames";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import "./index.css";

export default function Header() {
  const [areLinksVisible, setAreLinksVisible] = useState(false);

  const showNavLinks = () => setAreLinksVisible(true);
  const hideNavLinks = () => setAreLinksVisible(false);

  const navLinksClassName = cn({ show: areLinksVisible });
  const closeIconClassName = cn("icon-wrapper", "close", {
    show: areLinksVisible
  });

  return (
    <header>
      <h2>
        <a href="#">My Portfolio</a>
      </h2>
      <div className="icon-wrapper menu" onClick={showNavLinks}>
        <HiOutlineMenuAlt3 />
      </div>
      <ul className={navLinksClassName}>
        <li>
          <a href="#about" onClick={hideNavLinks}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={hideNavLinks}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={hideNavLinks}>
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" onClick={hideNavLinks}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact-me" onClick={hideNavLinks}>
            Contact Me
          </a>
        </li>
      </ul>
      <div className={closeIconClassName} onClick={hideNavLinks}>
        <CgClose />
      </div>
    </header>
  );
}
