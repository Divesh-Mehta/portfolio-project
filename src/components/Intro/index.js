import "./index.css";

import { ReactComponent as HelloIcon } from "../../icons/hello.svg";

export default function Intro() {
  return (
    <div className="stretch-height intro">
      <div className="intro__info">
        <div className="intro__info--title">
          <span>Hi,</span>
          <h1>I'am Divesh</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo
          velit, tempor congue mattis ac, finibus quis velit.
        </p>
        <div className="btn-wrapper">
          <a className="btn" href="#about">
            Know me more
          </a>
        </div>
      </div>
      <HelloIcon className="intro__icon" />
    </div>
  );
}
